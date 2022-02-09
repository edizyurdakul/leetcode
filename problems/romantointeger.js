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

// Another solution I found
// /**
//  * @param {string} s
//  * @return {number}
//  */
//  var romanToInt = function (s) {
//     let map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }

//     let res = 0
//     for (let i = 0; i < s.length; i++) {
//       let currValue = map[s[i]]
//       let nextValue = map[s[i + 1]]

//       if (nextValue > currValue) {
//         res += nextValue - currValue
//         i++
//       } else {
//         res += currValue
//       }
//     }
//     return res
//   }
