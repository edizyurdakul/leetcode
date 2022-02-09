/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let arr = s.split("");
  let num = 0;
  arr.map((item, index) => {
    switch (item) {
      case "I":
        if (arr[index + 1] === "V") {
          num = num + 4;
        } else if (arr[index + 1] === "X") {
          num = num + 9;
        } else {
          num = num + 1;
        }
        break;
      case "V":
        if (arr[index + -1] === "I") {
          num = num;
        } else {
          num = num + 5;
        }
        break;
      case "X":
        if (arr[index + 1] === "L") {
          num = num + 40;
        } else if (arr[index + 1] === "C") {
          num = num + 90;
        } else if (arr[index + -1] === "I") {
          num = num;
        } else {
          num = num + 10;
        }
        break;
      case "L":
        if (arr[index + -1] === "X") {
          num = num;
        } else {
          num = num + 50;
        }
        break;
      case "C":
        if (arr[index + 1] === "D") {
          num = num + 400;
        } else if (arr[index + 1] === "M") {
          num = num + 900;
        } else if (arr[index + -1] === "X") {
          num = num;
        } else {
          num = num + 100;
        }
        break;
      case "D":
        if (arr[index + -1] === "C") {
          num = num;
        } else {
          num = num + 500;
        }
        break;
      case "M":
        if (arr[index + -1] === "C") {
          num = num;
        } else {
          num = num + 1000;
        }
        break;
      default:
        break;
    }
  });
  return num;
};
