module.exports = function check(str, bracketsConfig) {
  // your solution
  const openBrackets = [];
  const closeBrackets = [];
  let strLength = str.length;
  let bracketsConfigLength = bracketsConfig.length;
  let arr = str.split('');
  let result = [];

  for (let i = 0; i < bracketsConfigLength; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
  }
  
  let openBracketsLength = openBrackets.length;

  for (let i = 0; i < strLength; i++) {
    for (let j = 0; j < openBracketsLength; j++) {
      if (arr[i] == openBrackets[i]) {
        result.push(arr[i]);
      /*} else if (arr[i] == closeBrackets && arr[i - 1] == openBrackets) {
        result.pop(i);*/
      } else {
        
        result.pop(i);//return false;
      }
      
    }
  }
  console.log(result);
  
  if (result.length == 0) {
    return true;
  } else {
    return false;
  }
}
