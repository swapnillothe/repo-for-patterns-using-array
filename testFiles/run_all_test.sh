#! /bin/bash

./run_test.sh ../src/rectangleGenerator.js ../appTestData/input/all_rectangle_input ../appTestData/output/all_rectangle_output
Result1=$?
./run_test.sh ../src/diamondGenerator.js ../appTestData/input/all_diamond_input ../appTestData/output/all_diamond_output
Result2=$?
./run_test.sh ../src/triangleGenerator.js ../appTestData/input/all_triangle_input ../appTestData/output/all_triangle_output
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

