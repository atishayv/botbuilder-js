/**
 * @module adaptive-expressions
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { ExpressionType } from '../expressionType';
import { FunctionUtils } from '../functionUtils';
import { InternalFunctionUtils } from '../functionUtils.internal';
import { Options } from '../options';
import { StringTransformEvaluator } from './stringTransformEvaluator';

/**
 * Return a string in uppercase format.
 * If a character in the string doesn't have an uppercase version, that character stays unchanged in the returned string.
 */
export class ToUpper extends StringTransformEvaluator {
    /**
     * Initializes a new instance of the [ToUpper](xref:adaptive-expressions.ToUpper) class.
     */
    public constructor() {
        super(ExpressionType.ToUpper, ToUpper.evaluator, FunctionUtils.validateUnaryOrBinaryString);
    }

    /**
     * @private
     */
    private static evaluator(args: readonly string[], options: Options): string {
        let locale = options.locale ? options.locale : Intl.DateTimeFormat().resolvedOptions().locale;
        locale = FunctionUtils.determineLocale(args, 2, locale);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (InternalFunctionUtils.parseStringOrUndefined(args[0]) as any).toLocaleUpperCase(locale);
    }
}
