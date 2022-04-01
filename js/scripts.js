function boopBeep(string) {
  let num = parseInt(string);
  const numArray = [];
  const finalArray = [];
  for (let i = 0; i <= num; i++)  {
    number = i;
    numArray.push(number);
  }
  numArray.forEach(function(element) {
    finalString = detectNum(element);
    finalArray.push(finalString);
  })
  const results = finalArray.join(", ")
  return results;
}

function detectNum(number)  {
  let splitNum = number.toString().split("");
  splitNum.forEach(function(element, index)  {
    let digit = parseInt(element);
    splitNum[index] = digit;
  })
  for (let i = 0; i < splitNum.length; i++) {
    if (splitNum[i] === 3)  {
      let wholeNum = splitNum.join("");
      wholeNum = parseInt(wholeNum);
      replaceNum = beMyNeighbor(wholeNum)
      return replaceNum;
    } 
  }
  for (let i = 0; i < splitNum.length; i++)  {
    if (splitNum[i] === 2) {
      let wholeNum = splitNum.join("");
      wholeNum = parseInt(wholeNum);
      replaceNum = boop(wholeNum)
      return replaceNum;
    }
  }
  for (let i = 0; i < splitNum.length; i++)  {
    if (splitNum[i] === 1) {
      let wholeNum = splitNum.join("");
      replaceNum = beep(wholeNum)
      return replaceNum;
    }
  }
  let wholeNum = splitNum.join("");
  return wholeNum;
}

function beep(number) {
  let string = number.toString();
  string = "Beep!";
  return string;
}

function boop(number) {
  let string = number.toString();
  string = "Boop!";
  return string;
}

function beMyNeighbor(number) {
  let string = number.toString();
  string = "Won't you be my neighbor?"
  return string;
}