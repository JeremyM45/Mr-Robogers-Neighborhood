function boopBeep(string, name) {
  string = string.replace(/[a-zA-Z ]/g, " ");
  if(string.includes(" ")) {
    return fail();
  }
  let num = parseInt(string);
  const numArray = [];
  const finalArray = [];
  for (let i = 0; i <= num; i++)  {
    let number = i;
    numArray.push(number);
  }
  numArray.forEach(function(element) {
    let finalString = detectNum(element, name);
    finalArray.push(finalString);
  });
  const results = finalArray.join(", ");
  return results;
}
function boopBeepReversed(string, name) {
  string = string.replace(/[a-zA-Z ]/g, " ");
  if(string.includes(" ")) {
    return fail();
  }
  let num = parseInt(string);
  let numArray = [];
  const finalArray = [];
  for (let i = 0; i <= num; i++)  {
    let number = i;
    numArray.push(number);
  }
  numArray = numArray.reverse();
  numArray.forEach(function(element) {
    let finalString = detectNum(element, name);
    finalArray.push(finalString);
  });
  const results = finalArray.join(", ");
  return results;
}
function detectNum(number, name)  {
  let splitNum = number.toString().split("");
  splitNum.forEach(function(element, index)  {
    let digit = parseInt(element);
    splitNum[index] = digit;
  });
  for (let i = 0; i < splitNum.length; i++) {
    if (splitNum[i] === 3)  {
      return beMyNeighbor(name);
    } 
  }
  for (let i = 0; i < splitNum.length; i++)  {
    if (splitNum[i] === 2) {
      return boop();
    }
  }
  for (let i = 0; i < splitNum.length; i++)  {
    if (splitNum[i] === 1) {
      return beep();
    }
  }
  let wholeNum = splitNum.join("");
  return wholeNum;
}
function beep() {
  const string = "Beep!";
  return string;
}
function boop() {
  const string = "Boop!";
  return string;
}
function beMyNeighbor(name) {
  const string = "Won't you be my neighbor " + name + "?";
  return string;
}
function fail() {
  const failMessage = 'Hey buddy, it says "Enter <b>A</b> Number" So how about you try entering a number instead?';
  return failMessage;
}

$(document).ready(function()  {
  $("form#enterNumber").submit(function(e)  {
    e.preventDefault();
    const number = $("#inputNumber").val();
    const name = $("#inputName").val();
    let result = boopBeep(number, name);
    $(".output").html(result);
  });
  $("form#reversed").submit(function(e) {
    e.preventDefault();
    const number = $("#inputNumber").val();
    const name = $("#inputName").val();
    let result = boopBeepReversed(number, name);
    $(".output").html(result);
  });
});