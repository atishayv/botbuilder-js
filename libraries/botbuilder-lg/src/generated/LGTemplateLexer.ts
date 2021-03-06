// Generated from src/LGTemplateLexer.g4 by ANTLR 4.7.3-SNAPSHOT

/**
 * @module botbuilder-lg
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class LGTemplateLexer extends Lexer {
	public static readonly WS = 1;
	public static readonly NEWLINE = 2;
	public static readonly COMMENTS = 3;
	public static readonly DASH = 4;
	public static readonly LEFT_SQUARE_BRACKET = 5;
	public static readonly INVALID_TOKEN = 6;
	public static readonly WS_IN_BODY = 7;
	public static readonly MULTILINE_PREFIX = 8;
	public static readonly NEWLINE_IN_BODY = 9;
	public static readonly IF = 10;
	public static readonly ELSEIF = 11;
	public static readonly ELSE = 12;
	public static readonly SWITCH = 13;
	public static readonly CASE = 14;
	public static readonly DEFAULT = 15;
	public static readonly ESCAPE_CHARACTER = 16;
	public static readonly EXPRESSION = 17;
	public static readonly TEXT = 18;
	public static readonly MULTILINE_SUFFIX = 19;
	public static readonly WS_IN_STRUCTURE_NAME = 20;
	public static readonly NEWLINE_IN_STRUCTURE_NAME = 21;
	public static readonly STRUCTURE_NAME = 22;
	public static readonly TEXT_IN_STRUCTURE_NAME = 23;
	public static readonly STRUCTURED_COMMENTS = 24;
	public static readonly WS_IN_STRUCTURE_BODY = 25;
	public static readonly STRUCTURED_NEWLINE = 26;
	public static readonly STRUCTURED_BODY_END = 27;
	public static readonly STRUCTURE_IDENTIFIER = 28;
	public static readonly STRUCTURE_EQUALS = 29;
	public static readonly STRUCTURE_OR_MARK = 30;
	public static readonly ESCAPE_CHARACTER_IN_STRUCTURE_BODY = 31;
	public static readonly EXPRESSION_IN_STRUCTURE_BODY = 32;
	public static readonly TEXT_IN_STRUCTURE_BODY = 33;
	public static readonly NORMAL_TEMPLATE_BODY_MODE = 1;
	public static readonly MULTILINE_MODE = 2;
	public static readonly STRUCTURE_NAME_MODE = 3;
	public static readonly STRUCTURE_BODY_MODE = 4;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE", "NORMAL_TEMPLATE_BODY_MODE", "MULTILINE_MODE", "STRUCTURE_NAME_MODE", 
		"STRUCTURE_BODY_MODE",
	];

	public static readonly ruleNames: string[] = [
		"A", "C", "D", "E", "F", "H", "I", "L", "S", "T", "U", "W", "LETTER", 
		"NUMBER", "WHITESPACE", "STRING_LITERAL", "STRING_INTERPOLATION", "ESCAPE_CHARACTER_FRAGMENT", 
		"IDENTIFIER", "OBJECT_DEFINITION", "EXPRESSION_FRAGMENT", "NEWLINE_FRAGMENT", 
		"WS", "NEWLINE", "COMMENTS", "DASH", "LEFT_SQUARE_BRACKET", "INVALID_TOKEN", 
		"WS_IN_BODY", "MULTILINE_PREFIX", "NEWLINE_IN_BODY", "IF", "ELSEIF", "ELSE", 
		"SWITCH", "CASE", "DEFAULT", "ESCAPE_CHARACTER", "EXPRESSION", "TEXT", 
		"MULTILINE_SUFFIX", "MULTILINE_ESCAPE_CHARACTER", "MULTILINE_EXPRESSION", 
		"MULTILINE_TEXT", "WS_IN_STRUCTURE_NAME", "NEWLINE_IN_STRUCTURE_NAME", 
		"STRUCTURE_NAME", "TEXT_IN_STRUCTURE_NAME", "STRUCTURED_COMMENTS", "WS_IN_STRUCTURE_BODY", 
		"STRUCTURED_NEWLINE", "STRUCTURED_BODY_END", "STRUCTURE_IDENTIFIER", "STRUCTURE_EQUALS", 
		"STRUCTURE_OR_MARK", "ESCAPE_CHARACTER_IN_STRUCTURE_BODY", "EXPRESSION_IN_STRUCTURE_BODY", 
		"TEXT_IN_STRUCTURE_BODY",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'|'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS", "NEWLINE", "COMMENTS", "DASH", "LEFT_SQUARE_BRACKET", 
		"INVALID_TOKEN", "WS_IN_BODY", "MULTILINE_PREFIX", "NEWLINE_IN_BODY", 
		"IF", "ELSEIF", "ELSE", "SWITCH", "CASE", "DEFAULT", "ESCAPE_CHARACTER", 
		"EXPRESSION", "TEXT", "MULTILINE_SUFFIX", "WS_IN_STRUCTURE_NAME", "NEWLINE_IN_STRUCTURE_NAME", 
		"STRUCTURE_NAME", "TEXT_IN_STRUCTURE_NAME", "STRUCTURED_COMMENTS", "WS_IN_STRUCTURE_BODY", 
		"STRUCTURED_NEWLINE", "STRUCTURED_BODY_END", "STRUCTURE_IDENTIFIER", "STRUCTURE_EQUALS", 
		"STRUCTURE_OR_MARK", "ESCAPE_CHARACTER_IN_STRUCTURE_BODY", "EXPRESSION_IN_STRUCTURE_BODY", 
		"TEXT_IN_STRUCTURE_BODY",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(LGTemplateLexer._LITERAL_NAMES, LGTemplateLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return LGTemplateLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	  ignoreWS = true; // usually we ignore whitespace, but inside template, whitespace is significant
	  beginOfTemplateBody = true; // whether we are at the begining of template body
	  inMultiline = false; // whether we are in multiline
	  beginOfTemplateLine = false;// weather we are at the begining of template string
	  inStructuredValue = false; // weather we are in the structure value
	  beginOfStructureProperty = false; // weather we are at the begining of structure property


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(LGTemplateLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "LGTemplateLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return LGTemplateLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return LGTemplateLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return LGTemplateLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return LGTemplateLexer.modeNames; }

	// @Override
	public action(_localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
		case 25:
			this.DASH_action(_localctx, actionIndex);
			break;

		case 26:
			this.LEFT_SQUARE_BRACKET_action(_localctx, actionIndex);
			break;

		case 27:
			this.INVALID_TOKEN_action(_localctx, actionIndex);
			break;

		case 29:
			this.MULTILINE_PREFIX_action(_localctx, actionIndex);
			break;

		case 30:
			this.NEWLINE_IN_BODY_action(_localctx, actionIndex);
			break;

		case 31:
			this.IF_action(_localctx, actionIndex);
			break;

		case 32:
			this.ELSEIF_action(_localctx, actionIndex);
			break;

		case 33:
			this.ELSE_action(_localctx, actionIndex);
			break;

		case 34:
			this.SWITCH_action(_localctx, actionIndex);
			break;

		case 35:
			this.CASE_action(_localctx, actionIndex);
			break;

		case 36:
			this.DEFAULT_action(_localctx, actionIndex);
			break;

		case 37:
			this.ESCAPE_CHARACTER_action(_localctx, actionIndex);
			break;

		case 38:
			this.EXPRESSION_action(_localctx, actionIndex);
			break;

		case 39:
			this.TEXT_action(_localctx, actionIndex);
			break;

		case 40:
			this.MULTILINE_SUFFIX_action(_localctx, actionIndex);
			break;

		case 45:
			this.NEWLINE_IN_STRUCTURE_NAME_action(_localctx, actionIndex);
			break;

		case 50:
			this.STRUCTURED_NEWLINE_action(_localctx, actionIndex);
			break;

		case 52:
			this.STRUCTURE_IDENTIFIER_action(_localctx, actionIndex);
			break;

		case 53:
			this.STRUCTURE_EQUALS_action(_localctx, actionIndex);
			break;

		case 54:
			this.STRUCTURE_OR_MARK_action(_localctx, actionIndex);
			break;

		case 55:
			this.ESCAPE_CHARACTER_IN_STRUCTURE_BODY_action(_localctx, actionIndex);
			break;

		case 56:
			this.EXPRESSION_IN_STRUCTURE_BODY_action(_localctx, actionIndex);
			break;

		case 57:
			this.TEXT_IN_STRUCTURE_BODY_action(_localctx, actionIndex);
			break;
		}
	}
	private DASH_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			 this.beginOfTemplateLine = true; this.beginOfTemplateBody = false; 
			break;
		}
	}
	private LEFT_SQUARE_BRACKET_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 1:
			this.beginOfTemplateBody = false;
			break;
		}
	}
	private INVALID_TOKEN_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 2:
			 this.beginOfTemplateBody = false; 
			break;
		}
	}
	private MULTILINE_PREFIX_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 3:
			 this.inMultiline = true; this.beginOfTemplateLine = false;
			break;
		}
	}
	private NEWLINE_IN_BODY_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 4:
			 this.ignoreWS = true;
			break;
		}
	}
	private IF_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 5:
			 this.ignoreWS = true; this.beginOfTemplateLine = false;
			break;
		}
	}
	private ELSEIF_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 6:
			 this.ignoreWS = true; this.beginOfTemplateLine = false;
			break;
		}
	}
	private ELSE_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 7:
			 this.ignoreWS = true; this.beginOfTemplateLine = false;
			break;
		}
	}
	private SWITCH_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 8:
			 this.ignoreWS = true; this.beginOfTemplateLine = false;
			break;
		}
	}
	private CASE_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 9:
			 this.ignoreWS = true; this.beginOfTemplateLine = false;
			break;
		}
	}
	private DEFAULT_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 10:
			 this.ignoreWS = true; this.beginOfTemplateLine = false;
			break;
		}
	}
	private ESCAPE_CHARACTER_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 11:
			 this.ignoreWS = false; this.beginOfTemplateLine = false;
			break;
		}
	}
	private EXPRESSION_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 12:
			 this.ignoreWS = false; this.beginOfTemplateLine = false;
			break;
		}
	}
	private TEXT_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 13:
			 this.ignoreWS = false; this.beginOfTemplateLine = false;
			break;
		}
	}
	private MULTILINE_SUFFIX_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 14:
			 this.inMultiline = false; 
			break;
		}
	}
	private NEWLINE_IN_STRUCTURE_NAME_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 15:
			 this.ignoreWS = true;
			break;

		case 16:
			this.beginOfStructureProperty = true;
			break;
		}
	}
	private STRUCTURED_NEWLINE_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 17:
			 this.ignoreWS = true; this.inStructuredValue = false; this.beginOfStructureProperty = true;
			break;
		}
	}
	private STRUCTURE_IDENTIFIER_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 18:
			this.beginOfStructureProperty = false;
			break;
		}
	}
	private STRUCTURE_EQUALS_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 19:
			this.inStructuredValue = true;
			break;
		}
	}
	private STRUCTURE_OR_MARK_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 20:
			 this.ignoreWS = true; 
			break;
		}
	}
	private ESCAPE_CHARACTER_IN_STRUCTURE_BODY_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 21:
			 this.ignoreWS = false; 
			break;
		}
	}
	private EXPRESSION_IN_STRUCTURE_BODY_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 22:
			 this.ignoreWS = false; 
			break;
		}
	}
	private TEXT_IN_STRUCTURE_BODY_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 23:
			 this.ignoreWS = false; this.beginOfStructureProperty = false;
			break;
		}
	}
	// @Override
	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 26:
			return this.LEFT_SQUARE_BRACKET_sempred(_localctx, predIndex);

		case 28:
			return this.WS_IN_BODY_sempred(_localctx, predIndex);

		case 29:
			return this.MULTILINE_PREFIX_sempred(_localctx, predIndex);

		case 31:
			return this.IF_sempred(_localctx, predIndex);

		case 32:
			return this.ELSEIF_sempred(_localctx, predIndex);

		case 33:
			return this.ELSE_sempred(_localctx, predIndex);

		case 34:
			return this.SWITCH_sempred(_localctx, predIndex);

		case 35:
			return this.CASE_sempred(_localctx, predIndex);

		case 36:
			return this.DEFAULT_sempred(_localctx, predIndex);

		case 48:
			return this.STRUCTURED_COMMENTS_sempred(_localctx, predIndex);

		case 49:
			return this.WS_IN_STRUCTURE_BODY_sempred(_localctx, predIndex);

		case 51:
			return this.STRUCTURED_BODY_END_sempred(_localctx, predIndex);

		case 52:
			return this.STRUCTURE_IDENTIFIER_sempred(_localctx, predIndex);

		case 53:
			return this.STRUCTURE_EQUALS_sempred(_localctx, predIndex);
		}
		return true;
	}
	private LEFT_SQUARE_BRACKET_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return  this.beginOfTemplateBody ;
		}
		return true;
	}
	private WS_IN_BODY_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.ignoreWS;
		}
		return true;
	}
	private MULTILINE_PREFIX_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return  !this.inMultiline  && this.beginOfTemplateLine ;
		}
		return true;
	}
	private IF_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.beginOfTemplateLine;
		}
		return true;
	}
	private ELSEIF_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.beginOfTemplateLine;
		}
		return true;
	}
	private ELSE_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.beginOfTemplateLine;
		}
		return true;
	}
	private SWITCH_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.beginOfTemplateLine;
		}
		return true;
	}
	private CASE_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.beginOfTemplateLine;
		}
		return true;
	}
	private DEFAULT_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.beginOfTemplateLine;
		}
		return true;
	}
	private STRUCTURED_COMMENTS_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return  !this.inStructuredValue && this.beginOfStructureProperty;
		}
		return true;
	}
	private WS_IN_STRUCTURE_BODY_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.ignoreWS;
		}
		return true;
	}
	private STRUCTURED_BODY_END_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return !this.inStructuredValue;
		}
		return true;
	}
	private STRUCTURE_IDENTIFIER_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 12:
			return  !this.inStructuredValue && this.beginOfStructureProperty;
		}
		return true;
	}
	private STRUCTURE_EQUALS_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return !this.inStructuredValue;
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02#\u020A\b\x01" +
		"\b\x01\b\x01\b\x01\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04" +
		"\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04" +
		"\v\t\v\x04\f\t\f\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04" +
		"\x11\t\x11\x04\x12\t\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04" +
		"\x16\t\x16\x04\x17\t\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04" +
		"\x1B\t\x1B\x04\x1C\t\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04" +
		" \t \x04!\t!\x04\"\t\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(" +
		"\t(\x04)\t)\x04*\t*\x04+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x04" +
		"1\t1\x042\t2\x043\t3\x044\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04" +
		":\t:\x04;\t;\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03" +
		"\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\x9E\n\x11\f\x11" +
		"\x0E\x11\xA1\v\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\xA8" +
		"\n\x11\f\x11\x0E\x11\xAB\v\x11\x03\x11\x05\x11\xAE\n\x11\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x07\x12\xB4\n\x12\f\x12\x0E\x12\xB7\v\x12\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x05\x13\xBD\n\x13\x03\x14\x03\x14\x03\x14\x05\x14" +
		"\xC2\n\x14\x03\x14\x03\x14\x03\x14\x07\x14\xC7\n\x14\f\x14\x0E\x14\xCA" +
		"\v\x14\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\xD0\n\x15\f\x15\x0E\x15" +
		"\xD3\v\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x06\x16\xDD\n\x16\r\x16\x0E\x16\xDE\x03\x16\x05\x16\xE2\n\x16\x03" +
		"\x17\x05\x17\xE5\n\x17\x03\x17\x03\x17\x03\x18\x06\x18\xEA\n\x18\r\x18" +
		"\x0E\x18\xEB\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03" +
		"\x1A\x07\x1A\xF6\n\x1A\f\x1A\x0E\x1A\xF9\v\x1A\x03\x1A\x03\x1A\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u010E" +
		"\n\x1E\f\x1E\x0E\x1E\u0111\v\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03" +
		" \x03 \x03!\x03!\x03!\x07!\u0127\n!\f!\x0E!\u012A\v!\x03!\x03!\x03!\x03" +
		"!\x03\"\x03\"\x03\"\x03\"\x03\"\x07\"\u0135\n\"\f\"\x0E\"\u0138\v\"\x03" +
		"\"\x03\"\x03\"\x07\"\u013D\n\"\f\"\x0E\"\u0140\v\"\x03\"\x03\"\x03\"\x03" +
		"\"\x03#\x03#\x03#\x03#\x03#\x07#\u014B\n#\f#\x0E#\u014E\v#\x03#\x03#\x03" +
		"#\x03#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x07$\u015B\n$\f$\x0E$\u015E" +
		"\v$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x07%\u0169\n%\f%\x0E" +
		"%\u016C\v%\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x07&\u017A\n&\f&\x0E&\u017D\v&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'" +
		"\x03(\x03(\x03(\x03)\x06)\u018A\n)\r)\x0E)\u018B\x03)\x03)\x03*\x03*\x03" +
		"*\x03*\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03" +
		"-\x03-\x06-\u01A2\n-\r-\x0E-\u01A3\x03-\x03-\x03.\x06.\u01A9\n.\r.\x0E" +
		".\u01AA\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x030\x030\x030\x05" +
		"0\u01B9\n0\x030\x030\x030\x070\u01BE\n0\f0\x0E0\u01C1\v0\x031\x061\u01C4" +
		"\n1\r1\x0E1\u01C5\x032\x032\x072\u01CA\n2\f2\x0E2\u01CD\v2\x032\x032\x03" +
		"2\x032\x032\x033\x033\x033\x073\u01D7\n3\f3\x0E3\u01DA\v3\x033\x033\x03" +
		"4\x034\x034\x035\x035\x035\x035\x035\x035\x036\x036\x036\x056\u01EA\n" +
		"6\x036\x036\x036\x076\u01EF\n6\f6\x0E6\u01F2\v6\x036\x036\x036\x037\x03" +
		"7\x037\x037\x038\x038\x038\x039\x039\x039\x03:\x03:\x03:\x03;\x06;\u0205" +
		"\n;\r;\x0E;\u0206\x03;\x03;\t\x9F\xA9\xB5\u018B\u01A3\u01C5\u0206\x02" +
		"\x02<\x07\x02\x02\t\x02\x02\v\x02\x02\r\x02\x02\x0F\x02\x02\x11\x02\x02" +
		"\x13\x02\x02\x15\x02\x02\x17\x02\x02\x19\x02\x02\x1B\x02\x02\x1D\x02\x02" +
		"\x1F\x02\x02!\x02\x02#\x02\x02%\x02\x02\'\x02\x02)\x02\x02+\x02\x02-\x02" +
		"\x02/\x02\x021\x02\x023\x02\x035\x02\x047\x02\x059\x02\x06;\x02\x07=\x02" +
		"\b?\x02\tA\x02\nC\x02\vE\x02\fG\x02\rI\x02\x0EK\x02\x0FM\x02\x10O\x02" +
		"\x11Q\x02\x12S\x02\x13U\x02\x14W\x02\x15Y\x02\x02[\x02\x02]\x02\x02_\x02" +
		"\x16a\x02\x17c\x02\x18e\x02\x19g\x02\x1Ai\x02\x1Bk\x02\x1Cm\x02\x1Do\x02" +
		"\x1Eq\x02\x1Fs\x02 u\x02!w\x02\"y\x02#\x07\x02\x03\x04\x05\x06\x1A\x04" +
		"\x02CCcc\x04\x02EEee\x04\x02FFff\x04\x02GGgg\x04\x02HHhh\x04\x02JJjj\x04" +
		"\x02KKkk\x04\x02NNnn\x04\x02UUuu\x04\x02VVvv\x04\x02WWww\x04\x02YYyy\x04" +
		"\x02C\\c|\x06\x02\v\v\"\"\xA2\xA2\uFF01\uFF01\x04\x02))^^\x03\x02))\x04" +
		"\x02$$^^\x03\x02$$\x04\x02^^bb\x03\x02bb\x04\x02\f\f\x0F\x0F\x07\x02$" +
		"$))bb}}\x7F\x7F\x06\x02$$))bb\x7F\x7F\x04\x02/0aa\x02\u0221\x023\x03\x02" +
		"\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02" +
		"\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x03?\x03\x02\x02\x02\x03A\x03" +
		"\x02\x02\x02\x03C\x03\x02\x02\x02\x03E\x03\x02\x02\x02\x03G\x03\x02\x02" +
		"\x02\x03I\x03\x02\x02\x02\x03K\x03\x02\x02\x02\x03M\x03\x02\x02\x02\x03" +
		"O\x03\x02\x02\x02\x03Q\x03\x02\x02\x02\x03S\x03\x02\x02\x02\x03U\x03\x02" +
		"\x02\x02\x04W\x03\x02\x02\x02\x04Y\x03\x02\x02\x02\x04[\x03\x02\x02\x02" +
		"\x04]\x03\x02\x02\x02\x05_\x03\x02\x02\x02\x05a\x03\x02\x02\x02\x05c\x03" +
		"\x02\x02\x02\x05e\x03\x02\x02\x02\x06g\x03\x02\x02\x02\x06i\x03\x02\x02" +
		"\x02\x06k\x03\x02\x02\x02\x06m\x03\x02\x02\x02\x06o\x03\x02\x02\x02\x06" +
		"q\x03\x02\x02\x02\x06s\x03\x02\x02\x02\x06u\x03\x02\x02\x02\x06w\x03\x02" +
		"\x02\x02\x06y\x03\x02\x02\x02\x07{\x03\x02\x02\x02\t}\x03\x02\x02\x02" +
		"\v\x7F\x03\x02\x02\x02\r\x81\x03\x02\x02\x02\x0F\x83\x03\x02\x02\x02\x11" +
		"\x85\x03\x02\x02\x02\x13\x87\x03\x02\x02\x02\x15\x89\x03\x02\x02\x02\x17" +
		"\x8B\x03\x02\x02\x02\x19\x8D\x03\x02\x02\x02\x1B\x8F\x03\x02\x02\x02\x1D" +
		"\x91\x03\x02\x02\x02\x1F\x93\x03\x02\x02\x02!\x95\x03\x02\x02\x02#\x97" +
		"\x03\x02\x02\x02%\xAD\x03\x02\x02\x02\'\xAF\x03\x02\x02\x02)\xBA\x03\x02" +
		"\x02\x02+\xC1\x03\x02\x02\x02-\xCB\x03\x02\x02\x02/\xD6\x03\x02\x02\x02" +
		"1\xE4\x03\x02\x02\x023\xE9\x03\x02\x02\x025\xEF\x03\x02\x02\x027\xF3\x03" +
		"\x02\x02\x029\xFC\x03\x02\x02\x02;\u0101\x03\x02\x02\x02=\u0107\x03\x02" +
		"\x02\x02?\u010A\x03\x02\x02\x02A\u0114\x03\x02\x02\x02C\u011D\x03\x02" +
		"\x02\x02E\u0123\x03\x02\x02\x02G\u012F\x03\x02\x02\x02I\u0145\x03\x02" +
		"\x02\x02K\u0153\x03\x02\x02\x02M\u0163\x03\x02\x02\x02O\u0171\x03\x02" +
		"\x02\x02Q\u0182\x03\x02\x02\x02S\u0185\x03\x02\x02\x02U\u0189\x03\x02" +
		"\x02\x02W\u018F\x03\x02\x02\x02Y\u0197\x03\x02\x02\x02[\u019B\x03\x02" +
		"\x02\x02]\u01A1\x03\x02\x02\x02_\u01A8\x03\x02\x02\x02a\u01AE\x03\x02" +
		"\x02\x02c\u01B8\x03\x02\x02\x02e\u01C3\x03\x02\x02\x02g\u01C7\x03\x02" +
		"\x02\x02i\u01D3\x03\x02\x02\x02k\u01DD\x03\x02\x02\x02m\u01E0\x03\x02" +
		"\x02\x02o\u01E9\x03\x02\x02\x02q\u01F6\x03\x02\x02\x02s\u01FA\x03\x02" +
		"\x02\x02u\u01FD\x03\x02\x02\x02w\u0200\x03\x02\x02\x02y\u0204\x03\x02" +
		"\x02\x02{|\t\x02\x02\x02|\b\x03\x02\x02\x02}~\t\x03\x02\x02~\n\x03\x02" +
		"\x02\x02\x7F\x80\t\x04\x02\x02\x80\f\x03\x02\x02\x02\x81\x82\t\x05\x02" +
		"\x02\x82\x0E\x03\x02\x02\x02\x83\x84\t\x06\x02\x02\x84\x10\x03\x02\x02" +
		"\x02\x85\x86\t\x07\x02\x02\x86\x12\x03\x02\x02\x02\x87\x88\t\b\x02\x02" +
		"\x88\x14\x03\x02\x02\x02\x89\x8A\t\t\x02\x02\x8A\x16\x03\x02\x02\x02\x8B" +
		"\x8C\t\n\x02\x02\x8C\x18\x03\x02\x02\x02\x8D\x8E\t\v\x02\x02\x8E\x1A\x03" +
		"\x02\x02\x02\x8F\x90\t\f\x02\x02\x90\x1C\x03\x02\x02\x02\x91\x92\t\r\x02" +
		"\x02\x92\x1E\x03\x02\x02\x02\x93\x94\t\x0E\x02\x02\x94 \x03\x02\x02\x02" +
		"\x95\x96\x042;\x02\x96\"\x03\x02\x02\x02\x97\x98\t\x0F\x02\x02\x98$\x03" +
		"\x02\x02\x02\x99\x9F\x07)\x02\x02\x9A\x9B\x07^\x02\x02\x9B\x9E\t\x10\x02" +
		"\x02\x9C\x9E\n\x11\x02\x02\x9D\x9A\x03\x02\x02\x02\x9D\x9C\x03\x02\x02" +
		"\x02\x9E\xA1\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\x9F\x9D\x03\x02\x02" +
		"\x02\xA0\xA2\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA2\xAE\x07)\x02" +
		"\x02\xA3\xA9\x07$\x02\x02\xA4\xA5\x07^\x02\x02\xA5\xA8\t\x12\x02\x02\xA6" +
		"\xA8\n\x13\x02\x02\xA7\xA4\x03\x02\x02\x02\xA7\xA6\x03\x02\x02\x02\xA8" +
		"\xAB\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA" +
		"\xAC\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAC\xAE\x07$\x02\x02\xAD" +
		"\x99\x03\x02\x02\x02\xAD\xA3\x03\x02\x02\x02\xAE&\x03\x02\x02\x02\xAF" +
		"\xB5\x07b\x02\x02\xB0\xB1\x07^\x02\x02\xB1\xB4\t\x14\x02\x02\xB2\xB4\n" +
		"\x15\x02\x02\xB3\xB0\x03\x02\x02\x02\xB3\xB2\x03\x02\x02\x02\xB4\xB7\x03" +
		"\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB6\xB8\x03" +
		"\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB8\xB9\x07b\x02\x02\xB9(\x03\x02" +
		"\x02\x02\xBA\xBC\x07^\x02\x02\xBB\xBD\n\x16\x02\x02\xBC\xBB\x03\x02\x02" +
		"\x02\xBC\xBD\x03\x02\x02\x02\xBD*\x03\x02\x02\x02\xBE\xC2\x05\x1F\x0E" +
		"\x02\xBF\xC2\x05!\x0F\x02\xC0\xC2\x07a\x02\x02\xC1\xBE\x03\x02\x02\x02" +
		"\xC1\xBF\x03\x02\x02\x02\xC1\xC0\x03\x02\x02\x02\xC2\xC8\x03\x02\x02\x02" +
		"\xC3\xC7\x05\x1F\x0E\x02\xC4\xC7\x05!\x0F\x02\xC5\xC7\x07a\x02\x02\xC6" +
		"\xC3\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC5\x03\x02\x02\x02\xC7" +
		"\xCA\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9" +
		",\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCB\xD1\x07}\x02\x02\xCC\xD0" +
		"\x05-\x15\x02\xCD\xD0\x05%\x11\x02\xCE\xD0\n\x17\x02\x02\xCF\xCC\x03\x02" +
		"\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xCE\x03\x02\x02\x02\xD0\xD3\x03\x02" +
		"\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD4\x03\x02" +
		"\x02\x02\xD3\xD1\x03\x02\x02\x02\xD4\xD5\x07\x7F\x02\x02\xD5.\x03\x02" +
		"\x02\x02\xD6\xD7\x07&\x02\x02\xD7\xDC\x07}\x02\x02\xD8\xDD\x05%\x11\x02" +
		"\xD9\xDD\x05\'\x12\x02\xDA\xDD\x05-\x15\x02\xDB\xDD\n\x18\x02\x02\xDC" +
		"\xD8\x03\x02\x02\x02\xDC\xD9\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC" +
		"\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE" +
		"\xDF\x03\x02\x02\x02\xDF\xE1\x03\x02\x02\x02\xE0\xE2\x07\x7F\x02\x02\xE1" +
		"\xE0\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE20\x03\x02\x02\x02\xE3" +
		"\xE5\x07\x0F\x02\x02\xE4\xE3\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5" +
		"\xE6\x03\x02\x02\x02\xE6\xE7\x07\f\x02\x02\xE72\x03\x02\x02\x02\xE8\xEA" +
		"\x05#\x10\x02\xE9\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xE9" +
		"\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEE" +
		"\b\x18\x02\x02\xEE4\x03\x02\x02\x02\xEF\xF0\x051\x17\x02\xF0\xF1\x03\x02" +
		"\x02\x02\xF1\xF2\b\x19\x02\x02\xF26\x03\x02\x02\x02\xF3\xF7\x07@\x02\x02" +
		"\xF4\xF6\n\x16\x02\x02\xF5\xF4\x03\x02\x02\x02\xF6\xF9\x03\x02\x02\x02" +
		"\xF7\xF5\x03\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xFA\x03\x02\x02\x02" +
		"\xF9\xF7\x03\x02\x02\x02\xFA\xFB\b\x1A\x02\x02\xFB8\x03\x02\x02\x02\xFC" +
		"\xFD\x07/\x02\x02\xFD\xFE\b\x1B\x03\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0100" +
		"\b\x1B\x04\x02\u0100:\x03\x02\x02\x02\u0101\u0102\x07]\x02\x02\u0102\u0103" +
		"\x06\x1C\x02\x02\u0103\u0104\b\x1C\x05\x02\u0104\u0105\x03\x02\x02\x02" +
		"\u0105\u0106\b\x1C\x06\x02\u0106<\x03\x02\x02\x02\u0107\u0108\v\x02\x02" +
		"\x02\u0108\u0109\b\x1D\x07\x02\u0109>\x03\x02\x02\x02\u010A\u010B\x05" +
		"#\x10\x02\u010B\u010F\x06\x1E\x03\x02\u010C\u010E\x05#\x10\x02\u010D\u010C" +
		"\x03\x02\x02\x02\u010E\u0111\x03\x02\x02\x02\u010F\u010D\x03\x02\x02\x02" +
		"\u010F\u0110\x03\x02\x02\x02\u0110\u0112\x03\x02\x02\x02\u0111\u010F\x03" +
		"\x02\x02\x02\u0112\u0113\b\x1E\x02\x02\u0113@\x03\x02\x02\x02\u0114\u0115" +
		"\x07b\x02\x02\u0115\u0116\x07b\x02\x02\u0116\u0117\x07b\x02\x02\u0117" +
		"\u0118\x03\x02\x02\x02\u0118\u0119\x06\x1F\x04\x02\u0119\u011A\b\x1F\b" +
		"\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011C\b\x1F\t\x02\u011CB\x03\x02" +
		"\x02\x02\u011D\u011E\x051\x17\x02\u011E\u011F\b \n\x02\u011F\u0120\x03" +
		"\x02\x02\x02\u0120\u0121\b \x02\x02\u0121\u0122\b \v\x02\u0122D\x03\x02" +
		"\x02\x02\u0123\u0124\x05\x13\b\x02\u0124\u0128\x05\x0F\x06\x02\u0125\u0127" +
		"\x05#\x10\x02\u0126\u0125\x03\x02\x02\x02\u0127\u012A\x03\x02\x02\x02" +
		"\u0128\u0126\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u012B\x03" +
		"\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012B\u012C\x07<\x02\x02\u012C" +
		"\u012D\x06!\x05\x02\u012D\u012E\b!\f\x02\u012EF\x03\x02\x02\x02\u012F" +
		"\u0130\x05\r\x05\x02\u0130\u0131\x05\x15\t\x02\u0131\u0132\x05\x17\n\x02" +
		"\u0132\u0136\x05\r\x05\x02\u0133\u0135\x05#\x10\x02\u0134\u0133\x03\x02" +
		"\x02\x02\u0135\u0138\x03\x02\x02\x02\u0136\u0134\x03\x02\x02\x02\u0136" +
		"\u0137\x03\x02\x02\x02\u0137\u0139\x03\x02\x02\x02\u0138\u0136\x03\x02" +
		"\x02\x02\u0139\u013A\x05\x13\b\x02\u013A\u013E\x05\x0F\x06\x02\u013B\u013D" +
		"\x05#\x10\x02\u013C\u013B\x03\x02\x02\x02\u013D\u0140\x03\x02\x02\x02" +
		"\u013E\u013C\x03\x02\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\u0141\x03" +
		"\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0141\u0142\x07<\x02\x02\u0142" +
		"\u0143\x06\"\x06\x02\u0143\u0144\b\"\r\x02\u0144H\x03\x02\x02\x02\u0145" +
		"\u0146\x05\r\x05\x02\u0146\u0147\x05\x15\t\x02\u0147\u0148\x05\x17\n\x02" +
		"\u0148\u014C\x05\r\x05\x02\u0149\u014B\x05#\x10\x02\u014A\u0149\x03\x02" +
		"\x02\x02\u014B\u014E\x03\x02\x02\x02\u014C\u014A\x03\x02\x02\x02\u014C" +
		"\u014D\x03\x02\x02\x02\u014D\u014F\x03\x02\x02\x02\u014E\u014C\x03\x02" +
		"\x02\x02\u014F\u0150\x07<\x02\x02\u0150\u0151\x06#\x07\x02\u0151\u0152" +
		"\b#\x0E\x02\u0152J\x03\x02\x02\x02\u0153\u0154\x05\x17\n\x02\u0154\u0155" +
		"\x05\x1D\r\x02\u0155\u0156\x05\x13\b\x02\u0156\u0157\x05\x19\v\x02\u0157" +
		"\u0158\x05\t\x03\x02\u0158\u015C\x05\x11\x07\x02\u0159\u015B\x05#\x10" +
		"\x02\u015A\u0159\x03\x02\x02\x02\u015B\u015E\x03\x02\x02\x02\u015C\u015A" +
		"\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D\u015F\x03\x02\x02\x02" +
		"\u015E\u015C\x03\x02\x02\x02\u015F\u0160\x07<\x02\x02\u0160\u0161\x06" +
		"$\b\x02\u0161\u0162\b$\x0F\x02\u0162L\x03\x02\x02\x02\u0163\u0164\x05" +
		"\t\x03\x02\u0164\u0165\x05\x07\x02\x02\u0165\u0166\x05\x17\n\x02\u0166" +
		"\u016A\x05\r\x05\x02\u0167\u0169\x05#\x10\x02\u0168\u0167\x03\x02\x02" +
		"\x02\u0169\u016C\x03\x02\x02\x02\u016A\u0168\x03\x02\x02\x02\u016A\u016B" +
		"\x03\x02\x02\x02\u016B\u016D\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02" +
		"\u016D\u016E\x07<\x02\x02\u016E\u016F\x06%\t\x02\u016F\u0170\b%\x10\x02" +
		"\u0170N\x03\x02\x02\x02\u0171\u0172\x05\v\x04\x02\u0172\u0173\x05\r\x05" +
		"\x02\u0173\u0174\x05\x0F\x06\x02\u0174\u0175\x05\x07\x02\x02\u0175\u0176" +
		"\x05\x1B\f\x02\u0176\u0177\x05\x15\t\x02\u0177\u017B\x05\x19\v\x02\u0178" +
		"\u017A\x05#\x10\x02\u0179\u0178\x03\x02\x02\x02\u017A\u017D\x03\x02\x02" +
		"\x02\u017B\u0179\x03\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017E" +
		"\x03\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017E\u017F\x07<\x02\x02" +
		"\u017F\u0180\x06&\n\x02\u0180\u0181\b&\x11\x02\u0181P\x03\x02\x02\x02" +
		"\u0182\u0183\x05)\x13\x02\u0183\u0184\b\'\x12\x02\u0184R\x03\x02\x02\x02" +
		"\u0185\u0186\x05/\x16\x02\u0186\u0187\b(\x13\x02\u0187T\x03\x02\x02\x02" +
		"\u0188\u018A\n\x16\x02\x02\u0189\u0188\x03\x02\x02\x02\u018A\u018B\x03" +
		"\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018B\u0189\x03\x02\x02\x02\u018C" +
		"\u018D\x03\x02\x02\x02\u018D\u018E\b)\x14\x02\u018EV\x03\x02\x02\x02\u018F" +
		"\u0190\x07b\x02\x02\u0190\u0191\x07b\x02\x02\u0191\u0192\x07b\x02\x02" +
		"\u0192\u0193\x03\x02\x02\x02\u0193\u0194\b*\x15\x02\u0194\u0195\x03\x02" +
		"\x02\x02\u0195\u0196\b*\v\x02\u0196X\x03\x02\x02\x02\u0197\u0198\x05)" +
		"\x13\x02\u0198\u0199\x03\x02\x02\x02\u0199\u019A\b+\x16\x02\u019AZ\x03" +
		"\x02\x02\x02\u019B\u019C\x05/\x16\x02\u019C\u019D\x03\x02\x02\x02\u019D" +
		"\u019E\b,\x17\x02\u019E\\\x03\x02\x02\x02\u019F\u01A2\x051\x17\x02\u01A0" +
		"\u01A2\n\x16\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A1\u01A0\x03\x02\x02" +
		"\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A3\u01A1" +
		"\x03\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01A6\b-\x18\x02\u01A6" +
		"^\x03\x02\x02\x02\u01A7\u01A9\x05#\x10\x02\u01A8\u01A7\x03\x02\x02\x02" +
		"\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01A8\x03\x02\x02\x02\u01AA\u01AB\x03" +
		"\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01AD\b.\x02\x02\u01AD" +
		"`\x03\x02\x02\x02\u01AE\u01AF\x051\x17\x02\u01AF\u01B0\b/\x19\x02\u01B0" +
		"\u01B1\b/\x1A\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B3\b/\x02\x02\u01B3" +
		"\u01B4\b/\x1B\x02\u01B4b\x03\x02\x02\x02\u01B5\u01B9\x05\x1F\x0E\x02\u01B6" +
		"\u01B9\x05!\x0F\x02\u01B7\u01B9\x07a\x02\x02\u01B8\u01B5\x03\x02\x02\x02" +
		"\u01B8\u01B6\x03\x02\x02\x02\u01B8\u01B7\x03\x02\x02\x02\u01B9\u01BF\x03" +
		"\x02\x02\x02\u01BA\u01BE\x05\x1F\x0E\x02\u01BB\u01BE\x05!\x0F\x02\u01BC" +
		"\u01BE\t\x19\x02\x02\u01BD\u01BA\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02" +
		"\x02\u01BD\u01BC\x03\x02\x02\x02\u01BE\u01C1\x03\x02\x02\x02\u01BF\u01BD" +
		"\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02\u01C0d\x03\x02\x02\x02\u01C1" +
		"\u01BF\x03\x02\x02\x02\u01C2\u01C4\n\x16\x02\x02\u01C3\u01C2\x03\x02\x02" +
		"\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C5\u01C3" +
		"\x03\x02\x02\x02\u01C6f\x03\x02\x02\x02\u01C7\u01CB\x07@\x02\x02\u01C8" +
		"\u01CA\n\x16\x02\x02\u01C9\u01C8\x03\x02\x02\x02\u01CA\u01CD\x03\x02\x02" +
		"\x02\u01CB\u01C9\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC\u01CE" +
		"\x03\x02\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CE\u01CF\x051\x17\x02" +
		"\u01CF\u01D0\x062\v\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D2\b2\x02" +
		"\x02\u01D2h\x03\x02\x02\x02\u01D3\u01D4\x05#\x10\x02\u01D4\u01D8\x063" +
		"\f\x02\u01D5\u01D7\x05#\x10\x02\u01D6\u01D5\x03\x02\x02\x02\u01D7\u01DA" +
		"\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02" +
		"\u01D9\u01DB\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB\u01DC\b" +
		"3\x02\x02\u01DCj\x03\x02\x02\x02\u01DD\u01DE\x051\x17\x02\u01DE\u01DF" +
		"\b4\x1C\x02\u01DFl\x03\x02\x02\x02\u01E0\u01E1\x07_\x02\x02\u01E1\u01E2" +
		"\x065\r\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E4\b5\v\x02\u01E4\u01E5" +
		"\b5\v\x02\u01E5n\x03\x02\x02\x02\u01E6\u01EA\x05\x1F\x0E\x02\u01E7\u01EA" +
		"\x05!\x0F\x02\u01E8\u01EA\x07a\x02\x02\u01E9\u01E6\x03\x02\x02\x02\u01E9" +
		"\u01E7\x03\x02\x02\x02\u01E9\u01E8\x03\x02\x02\x02\u01EA\u01F0\x03\x02" +
		"\x02\x02\u01EB\u01EF\x05\x1F\x0E\x02\u01EC\u01EF\x05!\x0F\x02\u01ED\u01EF" +
		"\t\x19\x02\x02\u01EE\u01EB\x03\x02\x02\x02\u01EE\u01EC\x03\x02\x02\x02" +
		"\u01EE\u01ED\x03\x02\x02\x02\u01EF\u01F2\x03\x02\x02\x02\u01F0\u01EE\x03" +
		"\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F3\x03\x02\x02\x02\u01F2" +
		"\u01F0\x03\x02\x02\x02\u01F3\u01F4\x066\x0E\x02\u01F4\u01F5\b6\x1D\x02" +
		"\u01F5p\x03\x02\x02\x02\u01F6\u01F7\x07?\x02\x02\u01F7\u01F8\x067\x0F" +
		"\x02\u01F8\u01F9\b7\x1E\x02\u01F9r\x03\x02\x02\x02\u01FA\u01FB\x07~\x02" +
		"\x02\u01FB\u01FC\b8\x1F\x02\u01FCt\x03\x02\x02\x02\u01FD\u01FE\x05)\x13" +
		"\x02\u01FE\u01FF\b9 \x02\u01FFv\x03\x02\x02\x02\u0200\u0201\x05/\x16\x02" +
		"\u0201\u0202\b:!\x02\u0202x\x03\x02\x02\x02\u0203\u0205\n\x16\x02\x02" +
		"\u0204\u0203\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206\u0207\x03" +
		"\x02\x02\x02\u0206\u0204\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208" +
		"\u0209\b;\"\x02\u0209z\x03\x02\x02\x020\x02\x03\x04\x05\x06\x9D\x9F\xA7" +
		"\xA9\xAD\xB3\xB5\xBC\xC1\xC6\xC8\xCF\xD1\xDC\xDE\xE1\xE4\xEB\xF7\u010F" +
		"\u0128\u0136\u013E\u014C\u015C\u016A\u017B\u018B\u01A1\u01A3\u01AA\u01B8" +
		"\u01BD\u01BF\u01C5\u01CB\u01D8\u01E9\u01EE\u01F0\u0206#\b\x02\x02\x03" +
		"\x1B\x02\x07\x03\x02\x03\x1C\x03\x07\x05\x02\x03\x1D\x04\x03\x1F\x05\x07" +
		"\x04\x02\x03 \x06\x06\x02\x02\x03!\x07\x03\"\b\x03#\t\x03$\n\x03%\v\x03" +
		"&\f\x03\'\r\x03(\x0E\x03)\x0F\x03*\x10\t\x12\x02\t\x13\x02\t\x14\x02\x03" +
		"/\x11\x03/\x12\x07\x06\x02\x034\x13\x036\x14\x037\x15\x038\x16\x039\x17" +
		"\x03:\x18\x03;\x19";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LGTemplateLexer.__ATN) {
			LGTemplateLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(LGTemplateLexer._serializedATN));
		}

		return LGTemplateLexer.__ATN;
	}

}

