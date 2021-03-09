/**
 * @module adaptive-expressions
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { EvaluateExpressionDelegate, ExpressionEvaluator } from '../expressionEvaluator';
import { ExpressionType } from '../expressionType';
import { FunctionUtils } from '../functionUtils';
import { ReturnType } from '../returnType';

/**
 *  Return the highest value from an array. The array is inclusive at both ends.
 */
export class Max extends ExpressionEvaluator {
    /**
     * Initializes a new instance of the [Max](xref:adaptive-expressions.Max) class.
     */
    public constructor() {
        super(ExpressionType.Max, Max.evaluator(), ReturnType.Number, FunctionUtils.validateAtLeastOne);
    }

    /**
     * @private
     */
    private static evaluator(): EvaluateExpressionDelegate {
        return FunctionUtils.apply((args: readonly number[] | number[][]): number => {
            let result = Number.NEGATIVE_INFINITY;
            const firstChild = args[0];
            if (args.length === 1) {
                if (Array.isArray(firstChild)) {
                    for (const value of firstChild) {
                        result = Math.max(result, value);
                    }
                } else {
                    result = Math.max(result, firstChild);
                }
            } else {
                for (const arg of args) {
                    if (Array.isArray(arg)) {
                        for (const value of arg) {
                            result = Math.max(result, value);
                        }
                    } else {
                        result = Math.max(result, arg);
                    }
                }
            }

            return result;
        }, FunctionUtils.verifyNumberOrNumericList);
    }
}
