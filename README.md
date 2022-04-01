Describe: boopBeep()

  <!-- Test: "It should return an array of of the input string"
  Code: boopBeep("3 4 5 10 20");
  Expected Output: ["3", "4", "5", "10", "20"] -->
  
  <!-- Test: "It should convert input string into a number"
  Code: boopBeep("10")
  Expected Output: [10] -->

  <!-- Test: "It should return an array starting at 0 that incriments up to input number"
  Code: boopBeep("10")
  Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] -->

Describe: (detectNum)

  <!-- Test: "It should return a multiple digit number as an array of the two digits split apart"
  Code: detectNum(10)
  Expected Output: [1, 0] -->

  <!-- Test: "It should detect if one of the split digits is a 3"
  Code: detectNum(30)
  Expected Output: true  -->

  <!-- Test: "It should detect if one of the split digits is a 2"
  Code: detectNum(102)
  Expected Output: true -->
  
  <!-- Test: "It should detect if one of the split digits is a 1"
  Code: detectNum(401)
  Expected Output: true   -->

  <!-- Test: "It should combine split digit back into whole number"
  Code: detectNum(203)
  Expected Output: 203 -->

  Describe: (boop)

  Test: It should take number and convert to string
  Code: boop(43)
  Expected Output: "43"