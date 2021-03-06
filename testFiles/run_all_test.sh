#! /bin/bash

./testFiles/run_test.sh ./createRectangle.js ./appTestData/input/all_rectangle_input ./appTestData/output/all_rectangle_output
Result1=$?
./testFiles/run_test.sh ./createDiamond.js ./appTestData/input/all_diamond_input ./appTestData/output/all_diamond_output
Result2=$?
./testFiles/run_test.sh ./createTriangle.js ./appTestData/input/all_triangle_input ./appTestData/output/all_triangle_output
Result3=$?

if [ $Result1 = 0 ]; then
  echo rectagleGenerator test passed 
else
  echo rectagleGenerator test failed 
fi

if [ $Result2 = 0 ]; then
  echo diamondGenerator test passed 
else
  echo diamondGenerator test failed 
fi

if [ $Result3 = 0 ]; then
  echo triangleGenerator test passed 
else
  echo triangleGenerator test failed 
fi

node ./tests/patternLibsTest.js
Result4=$?

if [ $Result4 = 0 ]; then
  echo assertion tests passed 
else
  echo assertion tests failed 
fi

node ./tests/patternUtilsLibTest.js
Result5=$?

if [ $Result5 = 0 ]; then
  echo util assertion tests passed 
else
  echo util assertion tests failed 
fi

