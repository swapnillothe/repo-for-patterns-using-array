const library = require("../src/patternUtilLib.js");
const assert = require("assert");
const repeatCharacter = library.repeatCharacter;

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

