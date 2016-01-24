// Minimum 
function min(a, b){
  if (a>b) {
    return b;
    }
    else {
      return a;
    }
}

// Recursion
function isEven(number) {
    if(number < 0) {
     number = number*number 
     isEven(number);
    }
    if (number == 0) {
      return true; }
    else if (number == 1) {
      return false; }
    else        {
      return isEven(number - 2); }
}

// Bean counter

function countBs(word) {
  var count = 0;
  for (var i =0; i<word.length; i++){
      if (word.charAt(i)=='B') 
      count++;      
    }
    return count;
}

function countChar(word, char) {
  var count = 0;
    for (var i =0; i<word.length; i++){
      if (word.charAt(i)==char) 
      count++;      
    }
    return count;
}