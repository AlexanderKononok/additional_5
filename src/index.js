module.exports = function check(str, bracketsConfig) {
  // your solution
  const openBrackets = [];
  const closeBrackets = [];
  let strLength = str.length;
  let bracketsConfigLength = bracketsConfig.length;
  let arr = str.split('');
  const result = [];

  if (str.length % 2 != 0) {
    return false;
  }

  for (let i = 0; i < bracketsConfigLength; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets.push(bracketsConfig[i][1]);
  }

  for (let i = 0; i < strLength; i++) {
    for (let j = 0; j < bracketsConfigLength; j++) {
      if (result[result.length - 1] == openBrackets[j] && arr[i] == closeBrackets[j]) {
        result.pop();
      } else {
        if (arr[i] == openBrackets[j]) {
          result.push(arr[i]);
        }
      }
    }
  }
  
  if (result.length == 0) {
    return true;
  } else {
    return false;
  }
}
