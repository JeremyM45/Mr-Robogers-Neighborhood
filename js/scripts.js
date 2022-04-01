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
  let splitNum = number.toString().split("")
  splitNum.forEach(function(element, index)  {
    let digit = parseInt(element)
    splitNum[index] = digit
  })
  return splitNum
}