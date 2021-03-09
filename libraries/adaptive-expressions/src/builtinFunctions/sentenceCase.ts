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
 * Capitalizing only the first word and leave others lowercase.
 */
export class SentenceCase extends StringTransformEvaluator {
    /**
     * Initializes a new instance of the [SentenceCase](xref:adaptive-expressions.SentenceCase) class.
     */
    public constructor() {
        super(ExpressionType.SentenceCase, SentenceCase.evaluator, FunctionUtils.validateUnaryOrBinaryString);
    }

    /**
     * @private
     */
    private static evaluator(args: readonly string[], options: Options): string {
        let locale = options.locale ? options.locale : Intl.DateTimeFormat().resolvedOptions().locale;
        locale = FunctionUtils.determineLocale(args, 2, locale);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const inputStr = (InternalFunctionUtils.parseStringOrUndefined(args[0]) as any).toLocaleLowerCase(locale);
        if (inputStr === '') {
            return inputStr;
        } else {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return inputStr.charAt(0).toUpperCase() + (inputStr.substr(1) as any).toLocaleLowerCase(locale);
        }
    }
}
