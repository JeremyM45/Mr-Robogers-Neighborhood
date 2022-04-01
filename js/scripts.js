function boopBeep(string) {
  let num = parseInt(string);
  const numArray = [];
  for (let i = 0; i <= num; i++)  {
    number = i;
    numArray.push(number);
  }
  return numArray;
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
      return wholeNum;
    } 
  }
  for (let i = 0; i < splitNum.length; i++)  {
    if (splitNum[i] === 2) {
      let wholeNum = splitNum.join("");
      wholeNum = parseInt(wholeNum);
      return wholeNum;
    }
  }
  for (let i = 0; i < splitNum.length; i++)  {
    if (splitNum[i] === 1) {
      let wholeNum = splitNum.join("");
      wholeNum = parseInt(wholeNum);
      return wholeNum;
    }
  }
  let wholeNum = splitNum.join("");
  wholeNum = parseInt(wholeNum);
  return wholeNum;
}

function beep(number) {
  let string = number.toString();
  string = "Beep!"
  return string;
}