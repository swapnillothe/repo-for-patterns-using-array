const library = require("../src/patternLibs.js");
const assert = require("assert");
const Triangle = library.createTriangle;
const Rectangle = library.createRectangle;
const Diamond = library.createDiamond;

// Tests for left traingle with height 3 //
let actualOutput_left_3 = Triangle({ type:"left",height:3});
let expectedOutput_left_3 = "";
expectedOutput_left_3 += "*  \n"; 
expectedOutput_left_3 += "** \n";
expectedOutput_left_3 += "***";
assert.deepStrictEqual(actualOutput_left_3,expectedOutput_left_3);

//Tests for left triangle with height 5 //
let actualOutput_left_5 = Triangle({ type:"left",height:5});
let expectedOutput_left_5 = "";
expectedOutput_left_5 += "*    \n"; 
expectedOutput_left_5 += "**   \n";
expectedOutput_left_5 += "***  \n";
expectedOutput_left_5 += "**** \n";
expectedOutput_left_5 += "*****";
assert.deepStrictEqual(actualOutput_left_5,expectedOutput_left_5)

//Tests for left triangle with height 7 //
let actualOutput_left_7 = Triangle({ type:"left", height:7 });
let expectedOutput_left_7 = "";
expectedOutput_left_7 += "*      \n"; 
expectedOutput_left_7 += "**     \n";
expectedOutput_left_7 += "***    \n";
expectedOutput_left_7 += "****   \n";
expectedOutput_left_7 += "*****  \n";
expectedOutput_left_7 += "****** \n";
expectedOutput_left_7 += "*******";
assert.deepStrictEqual(actualOutput_left_7,expectedOutput_left_7);

//Tests for right traingle with height 3 //
let actualOutput_right_3 = Triangle({ type:"right", height:3 })
let expectedOutput_right_3 = "";
expectedOutput_right_3 += "  *\n"; 
expectedOutput_right_3 += " **\n";
expectedOutput_right_3 += "***";
assert.deepStrictEqual(actualOutput_right_3,expectedOutput_right_3);

//Tests for right triangle with height 5 //
let actualOutput_right_5 = Triangle({ type:"right", height:5 });
let expectedOutput_right_5 = "";
expectedOutput_right_5 += "    *\n"; 
expectedOutput_right_5 += "   **\n";
expectedOutput_right_5 += "  ***\n";
expectedOutput_right_5 += " ****\n";
expectedOutput_right_5 += "*****";
assert.deepStrictEqual(actualOutput_right_5,expectedOutput_right_5);

//Tests for right triangle with height 7 //
let actualOutput_right_7 = Triangle({ type:"right", height:7 });
let expectedOutput_right_7 = "";
expectedOutput_right_7 += "      *\n"; 
expectedOutput_right_7 += "     **\n";
expectedOutput_right_7 += "    ***\n";
expectedOutput_right_7 += "   ****\n";
expectedOutput_right_7 += "  *****\n";
expectedOutput_right_7 += " ******\n";
expectedOutput_right_7 += "*******";
assert.deepStrictEqual(actualOutput_right_7,expectedOutput_right_7)

//Tests for filled Rectangle with inputs 20 5 //
let actualOutput_filled_20_5 = Rectangle({ type:"filled", height:5, width:20 });
let expectedOutput_filled_20_5 = "";
expectedOutput_filled_20_5 += "********************\n"; 
expectedOutput_filled_20_5 += "********************\n"; 
expectedOutput_filled_20_5 += "********************\n"; 
expectedOutput_filled_20_5 += "********************\n"; 
expectedOutput_filled_20_5 += "********************"; 
assert.deepStrictEqual(actualOutput_filled_20_5,expectedOutput_filled_20_5);

//Tests for filled Rectangle with inputs 5 5 //
let actualOutput_filled_5_5 = Rectangle({ type:"filled", height:5, width:5 });
let expectedOutput_filled_5_5 = "";
expectedOutput_filled_5_5 += "*****\n"; 
expectedOutput_filled_5_5 += "*****\n"; 
expectedOutput_filled_5_5 += "*****\n"; 
expectedOutput_filled_5_5 += "*****\n"; 
expectedOutput_filled_5_5 += "*****"; 
assert.deepStrictEqual(actualOutput_filled_5_5,expectedOutput_filled_5_5);

//Tests for filled Recatangle  with inputs 2 2 //
let actualOutput_filled_2_2 = Rectangle({ type:"filled", height:2, width:2 });
let expectedOutput_filled_2_2 = "";
expectedOutput_filled_2_2 += "**\n"
expectedOutput_filled_2_2 += "**";
assert.deepStrictEqual(actualOutput_filled_2_2,expectedOutput_filled_2_2);

//Tests for filled Rectangle  with inputs 2 3 //
let actualOutput_empty_2_3 = Rectangle({ type:"filled", height:3, width:2 });
let expectedOutput_empty_2_3 = "";
expectedOutput_empty_2_3 += "**\n"
expectedOutput_empty_2_3 += "**\n";
expectedOutput_empty_2_3 += "**";
assert.deepStrictEqual(actualOutput_empty_2_3,expectedOutput_empty_2_3);

//Tests for empty Rectangle with inputs 5 5 //
let actualOutput_empty_5_5 =  Rectangle({ type:"empty", height:5, width:5 });
let expectedOutput_empty_5_5 = "";
expectedOutput_empty_5_5 += "*****\n"; 
expectedOutput_empty_5_5 += "*   *\n"; 
expectedOutput_empty_5_5 += "*   *\n"; 
expectedOutput_empty_5_5 += "*   *\n"; 
expectedOutput_empty_5_5 += "*****"; 
assert.deepStrictEqual(actualOutput_empty_5_5,expectedOutput_empty_5_5);

//Tests for empty Rectangle with inputs 20 5 //
let actualOutput_empty_20_5 = Rectangle({ type:"empty", height:5, width:20 });
let expectedOutput_empty_20_5 = "";
expectedOutput_empty_20_5 += "********************\n"; 
expectedOutput_empty_20_5 += "*                  *\n"; 
expectedOutput_empty_20_5 += "*                  *\n"; 
expectedOutput_empty_20_5 += "*                  *\n"; 
expectedOutput_empty_20_5 += "********************"; 
assert.deepStrictEqual(actualOutput_empty_20_5,expectedOutput_empty_20_5);

//Tests for empty Rectangle  with inputs 2 2 //
let actualOutput_empty_2_2 = Rectangle({ type:"empty", height:2, width:2 });
let expectedOutput_empty_2_2 = "";
expectedOutput_empty_2_2 += "**\n"
expectedOutput_empty_2_2 += "**";
assert.deepStrictEqual(actualOutput_empty_2_2,expectedOutput_empty_2_2);

//Tests for alternate Rectangle  with inputs 2 2 //
let actualOutput_alternate_2_2 = Rectangle({ type:"alternating", height:2, width:2 });
let expectedOutput_alternate_2_2 = "";
expectedOutput_alternate_2_2 += "**\n";
expectedOutput_alternate_2_2 += "--"
assert.deepStrictEqual(actualOutput_alternate_2_2,expectedOutput_alternate_2_2);

//Tests for alternate Rectangle with inputs 5 5 //
let actualOutput_alternate_5_5 = Rectangle({ type:"alternating", height:5, width:5 });
let expectedOutput_alternate_5_5 = "";
expectedOutput_alternate_5_5 += "*****\n"; 
expectedOutput_alternate_5_5 += "-----\n"; 
expectedOutput_alternate_5_5 += "*****\n"; 
expectedOutput_alternate_5_5 += "-----\n"; 
expectedOutput_alternate_5_5 += "*****"; 
assert.deepStrictEqual(actualOutput_alternate_5_5,expectedOutput_alternate_5_5);

//Tests for alternate Rectangle with  inputs 3 3 //
let actualOutput_alternate_3_3 = Rectangle({ type:"alternating", height:3, width:3 });
let expectedOutput_alternate_3_3 = "";
expectedOutput_alternate_3_3 += "***\n"; 
expectedOutput_alternate_3_3 += "---\n"; 
expectedOutput_alternate_3_3 += "***"; 
assert.deepStrictEqual(actualOutput_alternate_3_3,expectedOutput_alternate_3_3)

//Tests for alternate Rectangle with inputs  20 5 //
let actualOutput_alternate_20_5 = Rectangle({ type:"alternating", height:5, width:20 });
let expectedOutput_alternate_20_5 = "";
expectedOutput_alternate_20_5 += "********************\n"; 
expectedOutput_alternate_20_5 += "--------------------\n"; 
expectedOutput_alternate_20_5 += "********************\n"; 
expectedOutput_alternate_20_5 += "--------------------\n"; 
expectedOutput_alternate_20_5 += "********************"; 
assert.deepStrictEqual(actualOutput_alternate_20_5,expectedOutput_alternate_20_5);

//Tests for filled Diamond with width 5 //
let actualOutput_filled_5 = Diamond({ type:"filled", height:5 });
let expectedOutput_filled_5 = "";
expectedOutput_filled_5 += "  *  \n"; 
expectedOutput_filled_5 += " *** \n"; 
expectedOutput_filled_5 += "*****\n"; 
expectedOutput_filled_5 += " *** \n"; 
expectedOutput_filled_5 += "  *  "; 
assert.deepStrictEqual(actualOutput_filled_5,expectedOutput_filled_5);

//Tests for filled Diamond with height 7 //
let actualOutput_filled_7 = Diamond({ type:"filled", height:7 });
let expectedOutput_filled_7 = "";
expectedOutput_filled_7 += "   *   \n"; 
expectedOutput_filled_7 += "  ***  \n"; 
expectedOutput_filled_7 += " ***** \n"; 
expectedOutput_filled_7 += "*******\n"; 
expectedOutput_filled_7 += " ***** \n"; 
expectedOutput_filled_7 += "  ***  \n"; 
expectedOutput_filled_7 += "   *   "; 
assert.deepStrictEqual(actualOutput_filled_7,expectedOutput_filled_7);

//Tests for empty Diamond with height 5 //
let actualOutput_empty_5 = Diamond({ type:"hollow", height:5 });
let expectedOutput_empty_5 = "";
expectedOutput_empty_5 += "  *  \n"; 
expectedOutput_empty_5 += " * * \n"; 
expectedOutput_empty_5 += "*   *\n"; 
expectedOutput_empty_5 += " * * \n"; 
expectedOutput_empty_5 += "  *  "; 
assert.deepStrictEqual(actualOutput_empty_5,expectedOutput_empty_5);

//Tests for empty Diamond with height 7 //
let actualOutput_empty_7 = Diamond({ type:"hollow", height:7 });
let expectedOutput_empty_7 = "";
expectedOutput_empty_7 += "   *   \n"; 
expectedOutput_empty_7 += "  * *  \n"; 
expectedOutput_empty_7 += " *   * \n"; 
expectedOutput_empty_7 += "*     *\n"; 
expectedOutput_empty_7 += " *   * \n"; 
expectedOutput_empty_7 += "  * *  \n"; 
expectedOutput_empty_7 += "   *   "; 
assert.deepStrictEqual(actualOutput_empty_7,expectedOutput_empty_7);

//Tests for angled Diamond with height 5 //
let actualOutput_angled_5 = Diamond({ type:"angled", height:5 });
let expectedOutput_angled_5 = "";
expectedOutput_angled_5 += "  *  \n"; 
expectedOutput_angled_5 += " / \\ \n"; 
expectedOutput_angled_5 += "*   *\n"; 
expectedOutput_angled_5 += " \\ / \n"; 
expectedOutput_angled_5 += "  *  "; 
assert.deepStrictEqual(actualOutput_angled_5,expectedOutput_angled_5)

//Tests for angled Diamond with height 7 //
let actualOutput_angled_7 = Diamond({ type:"angled", height:7 });
let expectedOutput_angled_7 ="";
expectedOutput_angled_7 += "   *   \n"
expectedOutput_angled_7 += "  / \\  \n"
expectedOutput_angled_7 += " /   \\ \n"
expectedOutput_angled_7 += "*     *\n"
expectedOutput_angled_7 += " \\   / \n"
expectedOutput_angled_7 += "  \\ /  \n"
expectedOutput_angled_7 += "   *   "
assert.deepStrictEqual(actualOutput_angled_7,expectedOutput_angled_7);
