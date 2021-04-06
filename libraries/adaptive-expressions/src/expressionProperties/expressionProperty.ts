/**
 * @module adaptive-expressions
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { Expression } from '../expression';
import { MemoryInterface } from '../memory/memoryInterface';

/**
 * Base class which defines an Expression or value for a property.
 * @typeparam T Type of value of the expression property.
 */
export class ExpressionProperty<T> {
    private defaultValue: T;
    private expression: Expression;

    /**
     * Initializes a new instance of the [ExpressionProperty<T>](xref:adaptive-expressions.ExpressionProperty) class.
     * @param value Optional. Raw value of the expression property.
     * @param defaultValue Optional. Default value for the property.
     */
    public constructor(value?: T | string | Expression, defaultValue?: T) {
        this.defaultValue = defaultValue;
        this.setValue(value);
    }

    /**
     * Gets or sets the raw value of the expression property.
     */
    public value: T;

    /**
     * Getes or sets the expression text to evaluate to get the value.
     */
    public expressionText: string;

    /**
     * Convert an expression property to string.
     */
    public toString(): string {
        if (this.expressionText) {
            return `=${this.expressionText.replace(/^=/, '')}`;
        }
        return this.value ? this.value.toString() : '';
    }

    /**
     * This will return the existing expression if the value is non-complex type.
     */
    public toExpression(): Expression {
        if (this.expression) {
            return this.expression;
        }

        if (this.expressionText) {
            this.expression = Expression.parse(this.expressionText.replace(/^=/, ''));
            return this.expression;
        }

        // Generate expression
        switch (typeof this.value) {
            case 'string':
            case 'number':
            case 'boolean':
                this.expression = Expression.parse(this.value.toString());
                break;
            default:
                if (this.value === undefined) {
                    this.expression = Expression.parse('undefined');
                } else if (this.value === null) {
                    this.expression = Expression.parse('null');
                } else {
                    this.expression = Expression.parse(`json(${JSON.stringify(this.value)})`);
                }
                break;
        }
        return this.expression;
    }

    /**
     * Get the value.
     * @remarks
     * An error will be thrown if value is an invalid expression.
     * @param data Data to use for expression binding.
     * @returns The value.
     */
    public getValue(data: MemoryInterface | unknown): T {
        const { value, error } = this.tryGetValue(data);
        if (error) {
            throw error;
        }

        return value;
    }

    /**
     * Try to Get the value.
     * @param data Data to use for expression binding.
     * @returns the value or an error.
     */
    public tryGetValue(data: MemoryInterface | unknown): { value: T; error: Error } {
        if (!this.expression && this.expressionText) {
            try {
                this.expression = Expression.parse(this.expressionText.replace(/^=/, ''));
            } catch (error) {
                return { value: undefined, error: error.message };
            }
        }

        if (this.expression) {
            const result = this.expression.tryEvaluate(data);
            return { value: result.value as T, error: result.error ? new Error(result.error) : undefined };
        }

        return { value: this.value, error: undefined };
    }

    /**
     * Set the value.
     * @param value Value to set.
     */
    public setValue(value: T | string | Expression): void {
        this.value = this.defaultValue;
        this.expression = undefined;
        this.expressionText = undefined;

        if (typeof value == 'string') {
            this.expressionText = value.replace(/^=/, '');
        } else if (value instanceof Expression) {
            this.expression = value;
            this.expressionText = value.toString();
        } else if (value !== undefined) {
            this.value = value;
        }
    }
}
