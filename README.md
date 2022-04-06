
# _Mr. Roboger's Neighborhood_

#### By _**Jeremy Martin**_

#### _A webpage that will count up to the number you input with special phrases replacing certain numbers_

## Technologies Used

* HTML

* CSS

* Bootstrap

* JavaScript

* JQuery

## Description

This webpage has two input fields, name and number. An output will be displayed below the input fields that will count up to the number you input starting at 0. Numbers with a 1 in it will be replaced with "Beep!", numbers with a 2 in it will be replaced by "Boop!", and numbers with a 3 in it will be replaced by "Won't you be my neighbor (the name you input)?". The replacement of 3s out rank that of the 2s and the replacement of 2s out rank that of the 1s (e.g. 32 or 13 will be replaced with "Won't you be my neighbor (the name you input)?" and 21 will be replaced with "Boop!"). There is also an option to have the list starting with the number you input and counts down to 0 by clicking the "See Reversed" button.

## Setup/Installation Requirements

* Clone repo from GitHub using this link (https://github.com/JeremyM45/Mr-Robogers-Neighborhood)

* Navigate to the Mr-Robogers-Neighborhood folder
(Users/Username/Desktop/Mr-Robogers-Neighborhood)

* Open index.html file in your browser
(Users/Username/Desktop/Mr-Robogers-Neighborhood/index.html)

* Enter a name and a number in their respective input fields.

* Click on the "Submit" button to see output in order from 0 counting up to the number you input or click on the "See Reversed" button to see the output start with the number you input and countdown to 0.

* Output will display below the buttons

## Known Bugs

*  _No known bugs_

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) _04/01/2022_  _Jeremy Martin_

## Specs/Tests

#### Describe: boopBeep()

Test: "It should return an array of of the input string"

Code: boopBeep("3 4 5 10 20");

Expected Output: ["3", "4", "5", "10", "20"]

Test: "It should convert input string into a number"

Code: boopBeep("10")

Expected Output: [10]

Test: "It should return an array starting at 0 that incriments up to input number"

Code: boopBeep("10")

Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

#### Describe: (detectNum)

Test: "It should return a multiple digit number as an array of the two digits split apart"

Code: detectNum(10)

Expected Output: [1, 0]

Test: "It should detect if one of the split digits is a 3"

Code: detectNum(30)

Expected Output: true

Test: "It should detect if one of the split digits is a 2"

Code: detectNum(102)

Expected Output: true

Test: "It should detect if one of the split digits is a 1"

Code: detectNum(401)

Expected Output: true

Test: "It should combine split digit back into whole number"

Code: detectNum(203)

Expected Output: 203

#### Describe: (beep)

Test: It should take number and convert to string

Code: beep(43)

Expected Output: "43"

Test: It should change string from string of the number to "Beep!"

Code: beep(43)

Expected Output: "Beep!"

#### Describe: (boop)

Test: It should take number and convert to string

Code: boop(52)

Expected Output: "52"

Test: It should change string from string of the number to "Boop!"

Code: boop(52)

Expected Output: "Boop!"

#### Describe: (beMyNeighbor)

Test: It should take number and convert to string

Code: beMyNeighbor(68)

Expected Output: "68"

Test: It should change string from string of the number to "Won't you be my neighbor?"

Code: beMyNeighbor(68)

Expected Output: "Won't you be my neighbor?"

#### Describe: (detectNum)

Test: "It should replace number with 3 in it to "Won't you be my neighbor?" by passing to (beMyNeighbor)"

Code: detectNum(301)

Expected Output: "Won't you be my neighbor?"

Test: "It should replace number with 2 in it to "Boop!" by passing to (boop)"

Code: detectNum(201)

Expected Output: "Boop!"

Test: "It should replace number with 1 in it to "Beep!" by passing to (beep)"

Code: detectNum(101)

Expected Output: "Beep!"

#### Describe: (boopBeep)

Test: "It should loop through array sending all elements to detectNum"

Code: boopBeep("5")

Expected Output: ["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5"]

Test: "It should convert finalArray into string so the results can be displayed"

Code: boopBeep("5")

Expected Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5"