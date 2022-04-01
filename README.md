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

  Describe: (beep)

  <!-- Test: It should take number and convert to string
  Code: beep(43)
  Expected Output: "43" -->

  <!-- Test: It should change string from string of the number to "Beep!"
  Code: beep(43)
  Expected Output: "Beep!" -->

  Describe: (boop)

  <!-- Test: It should take number and convert to string
  Code: boop(52)
  Expected Output: "52" -->

  <!-- Test: It should change string from string of the number to "Boop!"
  Code: boop(52)
  Expected Output: "Boop!" -->

  Describe: (beMyNeighbor)

  <!-- Test: It should take number and convert to string
  Code: beMyNeighbor(68)
  Expected Output: "68" -->

  <!-- Test: It should change string from string of the number to "Won't you be my neighbor?"
  Code: beMyNeighbor(68)
  Expected Output: "Won't you be my neighbor?"  -->

  Describe: (detectNum)

  Test: "It should replace number with 3 in it to "Won't you be my neighbor?" by passing to (beMyNeighbor)"
  Code: detectNum(301)
  Expected Output: "Won't you be my neighbor?"

   Test: "It should replace number with 2 in it to "Boop!" by passing to (boop)"
  Code: detectNum(201)
  Expected Output: "Boop!"

   Test: "It should replace number with 1 in it to "Beep!" by passing to (beep)"
  Code: detectNum(101)
  Expected Output: "Beep!"