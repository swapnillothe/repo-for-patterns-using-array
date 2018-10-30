const library = require("../src/patternUtilLib.js");
const assert = require("assert");
const repeatCharacter = library.repeatCharacter;
const repeatStar = library.repeatStar; 
const repeatSpace = library.repeatSpace;
const justifyText = library.justifyText;
const repeatDash = library.repeatDash;
const createStarredEnd = library.createStarredEnd;
const getOddNumber = library.getOddNumber;
const generateLine = library.generateLine;
const generateFilledLine = library.generateFilledLine;
const generateHollowLine = library.generateHollowLine;
const calculateJustifyWidth = library.calculateJustifyWidth;
const increment = library.increment; 
const createNumberSeries = library.createNumberSeries;
const generateUpperPartDiamond = library.generateUpperPartDiamond;
const generateLowerPartDiamond = library.generateLowerPartDiamond;

// Assertion test for repeatCharacter with three stars//
let actual_output_3_stars = repeatCharacter("*",3);
let expected_output_3_stars = "***";
assert.deepEqual(actual_output_3_stars,expected_output_3_stars);

// Assertion test for repeatCharacter with one doller//
let actual_output_1_doller = repeatCharacter("$",1);
let expected_output_1_doller = "$";
assert.deepEqual(actual_output_1_doller,expected_output_1_doller);

// Assertion test for repeatCharacter with two "@"//
let actual_output_2 = repeatCharacter("@",2);
let expected_output_2 = "@@";
assert.deepEqual(actual_output_2,expected_output_2);

// Assertion test for repeatCharacter with five "?"//
let actual_output_5_questionMarks = repeatCharacter("?",5);
let expected_output_5_questionMarks = "?????";
assert.deepEqual(actual_output_5_questionMarks,expected_output_5_questionMarks);

// Assertion test for repeatCharacter with three "a"//
let actual_output_3_a = repeatCharacter("a",3);
let expected_output_3_a = "aaa";
assert.deepEqual(actual_output_1_doller,expected_output_1_doller);

// Assertion test for repeatStar function //
assert.deepEqual(repeatStar(1),"*");
assert.deepEqual(repeatStar(2),"**");
assert.deepEqual(repeatStar(3),"***");
assert.deepEqual(repeatStar(4),"****");
assert.deepEqual(repeatStar(5),"*****");

// Assertion test for repeatStar function //
assert.deepEqual(repeatSpace(1)," ");
assert.deepEqual(repeatSpace(2),"  ");
assert.deepEqual(repeatSpace(3),"   ");
assert.deepEqual(repeatSpace(4),"    ");
assert.deepEqual(repeatSpace(5),"     ");

// Assertion test for repeatDash function //
assert.deepEqual(repeatDash(1),"-");
assert.deepEqual(repeatDash(2),"--");
assert.deepEqual(repeatDash(3),"---");
assert.deepEqual(repeatDash(4),"----");
assert.deepEqual(repeatDash(5),"-----");

// Assertion test for justifyText function //
assert.deepEqual(justifyText("*",1)," *");
assert.deepEqual(justifyText("abc",2),"  abc");
assert.deepEqual(justifyText("#$",5),"     #$");
assert.deepEqual(justifyText(":",2),"  :");
assert.deepEqual(justifyText("*****",0),"*****");

// Assertion test for createStarredEnd function //
assert.deepEqual(createStarredEnd(1),"*");
assert.deepEqual(createStarredEnd(2),"**");
assert.deepEqual(createStarredEnd(3),"* *");
assert.deepEqual(createStarredEnd(4),"*  *");
assert.deepEqual(createStarredEnd(5),"*   *");

// Assertion test for getOddNumber function //
let oddNumber = getOddNumber();
assert.deepEqual(oddNumber(),1);
assert.deepEqual(oddNumber(),3);
assert.deepEqual(oddNumber(),5);
assert.deepEqual(oddNumber(),7);
assert.deepEqual(oddNumber(),9);

// Assertion test for genearateLine function //
assert.deepEqual(generateLine("*","*","*",4),"****");
assert.deepEqual(generateLine("|","|","|",6),"||||||");
assert.deepEqual(generateLine("a","b","c",5),"abbbc");
assert.deepEqual(generateLine("1","a","1",3),"1a1");
assert.deepEqual(generateLine("-","#","-",2),"--");

// Assertion test for genearateFilledLine function //
assert.deepEqual(generateFilledLine(4),"****");
assert.deepEqual(generateFilledLine(6),"******");
assert.deepEqual(generateFilledLine(5),"*****");
assert.deepEqual(generateFilledLine(3),"***");
assert.deepEqual(generateFilledLine(2),"**");

// Assertion test for genearateHollowLine function //
assert.deepEqual(generateHollowLine(4),"*  *");
assert.deepEqual(generateHollowLine(6),"*    *");
assert.deepEqual(generateHollowLine(5),"*   *");
assert.deepEqual(generateHollowLine(3),"* *");
assert.deepEqual(generateHollowLine(2),"**");


// Assertion test for generateUpperPartDiamond function //
assert.deepEqual(generateUpperPartDiamond(4),"\/  \\");
assert.deepEqual(generateUpperPartDiamond(6),"\/    \\");
assert.deepEqual(generateUpperPartDiamond(5),"\/   \\");
assert.deepEqual(generateUpperPartDiamond(3),"\/ \\");
assert.deepEqual(generateUpperPartDiamond(2),"\/\\");

// Assertion test for generateLowerPartDiamond function //
assert.deepEqual(generateLowerPartDiamond(4),"\\  \/");
assert.deepEqual(generateLowerPartDiamond(6),"\\    \/");
assert.deepEqual(generateLowerPartDiamond(5),"\\   \/");
assert.deepEqual(generateLowerPartDiamond(3),"\\ \/");
assert.deepEqual(generateLowerPartDiamond(2),"\\\/");

// Assertion test for calculateJustifyWidth function //
justifyWidth = calculateJustifyWidth(5);
assert.deepEqual(justifyWidth(),2);
assert.deepEqual(justifyWidth(),1);
assert.deepEqual(justifyWidth(),0);
assert.deepEqual(justifyWidth(),1);
assert.deepEqual(justifyWidth(),2);

// Assertion test for createNumberSeries function //
assert.deepEqual(createNumberSeries(3),[1,2,3]);
assert.deepEqual(createNumberSeries(2),[1,2]);
assert.deepEqual(createNumberSeries(4),[1,2,3,4]);
assert.deepEqual(createNumberSeries(5),[1,2,3,4,5]);
assert.deepEqual(createNumberSeries(1),[1]);

