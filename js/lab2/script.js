// 1. Convert the string "258.90" to: (a) integer, (b) floating number. Store in two variables.
str = "258.90";
a = parseInt(str);
b = parseFloat(str);

// ----------------------------------------------------------------------
// 2. Format the number 7.45678 to exactly 2 decimal places (string) then convert it back to a number.
x = parseFloat(parseFloat("7.45678").toFixed(2));

// ----------------------------------------------------------------------
// 3. Check if the value 'abc' is NaN. Also show a case where isNaN returns false for a non-number.
// console.log(Number.isNaN("abc")); // false
// console.log(Number.isNaN([1, 2])); // false

// ----------------------------------------------------------------------
// 4. Floating point: Show that (0.1 + 0.2) != 0.3. Produce a corrected decimal string with exactly 1 decimal place using toFixed.
// console.log(0.1 + 0.2); // 0.30000000000000004
str = (0.1 + 0.2).toFixed(1);

// ----------------------------------------------------------------------
// 5. Write a function to safely parse a string that may contain trailing text (e.g. "120px") returning the integer part or null if it starts with non-digit.
function myF(strNumber) {
  var i = 0;
  var ret = 0;
  while (i < strNumber.length) {
    if (strNumber[i] >= "0" && strNumber[i] <= "9")
      ret = ret * 10 + (strNumber[i] - "0");
    else break;

    i++;
  }
  return ret;
}

console.log(myF("120px"));

// ----------------------------------------------------------------------
// 6. Implement isFiniteNumber(value) that returns true only for finite numeric values (reject numeric strings, Infinity, NaN, null, etc.) WITHOUT using Number.isFinite. Provide 4 passing and 4 failing test examples (comments).
function isFiniteNumber(value) {
  if (
    value == Infinity ||
    value == null ||
    Number.isNaN(value) ||
    value == undefined ||
    typeof value == "string"
  ) {
    return false;
  }
  return true;
}
// true
// console.log(isFiniteNumber(20));
// console.log(isFiniteNumber(-50));
// console.log(isFiniteNumber(2.1354));
// console.log(isFiniteNumber(0));

// false
// console.log(isFiniteNumber(undefined));
// console.log(isFiniteNumber(Number.Infinity));
// console.log(isFiniteNumber(NaN));
// console.log(isFiniteNumber("120"));

// ----------------------------------------------------------------------
// 7. Remove leading and trailing spaces from the string "   hello world  ".
str = "   hello world  ".trim();

// ----------------------------------------------------------------------
// 8. Get the substring "script" from "javascript" using two different methods (slice + substring).
str = "javascript".substring(4);
// console.log(str);

// ----------------------------------------------------------------------
// 9. Count how many times the letter 'a' appears in "Banana Mania" (case-insensitive).
ban = "Banana Mania";
// console.log(ban.split("a").length - 1);

// ----------------------------------------------------------------------
// 10. Write a function reverseString(s) without using array reverse (iterate backwards).
function reverseString(s) {
  ret = "";
  for (var i = s.length - 1; i >= 0; --i) {
    ret += s[i];
  }
  return ret;
}

// ----------------------------------------------------------------------
// 11. Write a function capitalizeWords(sentence) that turns "hello there friend" into "Hello There Friend".
function capitalizeWords(sentence) {
  str = "";
  sentence.split(" ").forEach((element) => {
    element = element.charAt(0).toUpperCase() + element.slice(1);
    str += element + " ";
  });
  return str.substring(0, str.length - 1);
}
// console.log(capitalizeWords("hello there friend"));

// ----------------------------------------------------------------------
// 12. Extract the domain (without protocol and path) from a URL string like "https://example.com/path/to/page" (result: example.com) using indexOf + slice.
str = "https://example.com/path/to/page";
i1 = str.indexOf("//");
i2 = str.indexOf("/", i1 + 2);
str = str.slice(i1 + 2, i2);
// console.log(str);

// ----------------------------------------------------------------------
// 13. Implement a simple substring search function naiveIndexOf(haystack, needle) that returns first index or -1 (do not call built-in indexOf inside the loop).
function naiveIndexOf(word, key) {
  for (var i = 0; i + key.length < word.length; i += 1) {
    if (word.substring(i, i + key.length) === key) {
      return i;
    }
  }
  return -1;
}
// console.log(naiveIndexOf("hello, world", "ll"));
// console.log(naiveIndexOf("hello, world", "-1"));

// ----------------------------------------------------------------------
// 14. Buggy code: var s = 'hello'; if (s.toUpperCase = 'HELLO') { console.log('match'); }  // Fix and explain issue.
var s = "hello";
if (s.toUpperCase() === "HELLO") {
  // missing () of the function, and comparison id done using ==, or ===
  //   console.log("match");
}

// ----------------------------------------------------------------------
// 15. Create an array of the numbers 1..5, then push 6 and unshift 0.
arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.unshift(0);

// ----------------------------------------------------------------------
// 16. Remove the last element and store it. Remove the first element and store it.
last = arr.pop();
first = arr.shift();

// ----------------------------------------------------------------------
// 17. Use slice to copy the first 3 elements of [10,20,30,40,50] into a new array.
arr = [10, 20, 30, 40, 50].slice(0, 3);

// ----------------------------------------------------------------------
// 18. Use splice on [1,2,3,4,5] to remove 3 and 4 and insert 'a','b'. Result should be [1,2,'a','b',5].
arr = [1, 2, 3, 4, 5];
arr.splice(2, 2, "a", "b");

// ----------------------------------------------------------------------
// 19. Demonstrate the difference between slice and splice on the same starting array (show original after each).
arr = [10, 20, 30];
arr.slice(0, 1);
// console.log("array after slice(0, 1): ", arr);
arr.splice(0, 1);
// console.log("array after splice(0, 1): ", arr);

// ----------------------------------------------------------------------
// 20. Create a sparse array by assigning index 7 on a fresh [] then log length.
arr = [];
arr[7] = undefined;
// console.log(arr.length);

// ----------------------------------------------------------------------
// 21. Write a function compact(array) that returns a new array without falsy values (manual loop, no filter).
function compact(array) {
  falsy = [0, "", false, null, undefined];
  ret = [];
  for (var i = 0; i < array.length; i++) {
    var exclude = Number.isNaN(array[i]);

    for (j = 0; j < falsy.length; j++) {
      if (falsy[j] == array[i]) {
        exclude = true;
      }
    }

    if (!exclude) ret.push(array[i]);
  }

  return ret;
}

arr = compact([null, 0, "", undefined, NaN, false, "ok"]);
// console.log(arr);

// ----------------------------------------------------------------------
// 22. Implement a manual array clone deepClone1D(a) for a 1D array without using slice/concat.
function deepClone1D(a) {
  ret = [];
  for (var i = 0; i < a.length; i++) {
    ret.push(a[i]);
  }
  return ret;
}

// ----------------------------------------------------------------------
// 23. Map [1,2,3] to their squares using map.
arr = [1, 2, 3].map(function f(val) {
  return Math.pow(val, 2);
});
// console.log(arr);

// ----------------------------------------------------------------------
// 24. Filter [5,10,15,20] to keep values >= 12.
arr = [5, 10, 15, 20].filter(function f(val) {
  return val >= 12;
});
// console.log(arr);

// ----------------------------------------------------------------------
// 25. Reduce [2,4,6] to product.
arr = [2, 4, 5].reduce(function f(acc, val) {
  return acc * val;
}, 1);
// console.log(arr);

// ----------------------------------------------------------------------
// 26. Implement arraySum(a) using reduce; then implement arraySumLoop(a) using a for loop. Confirm outputs equal.
function arraySum(a) {
  return a.reduce(function (acc, val) {
    return acc + val;
  }, 0);
}

function arraySumLoop(a) {
  ret = 0;
  for (var i = 0; i < a.length; i += 1) ret += a[i];

  return ret;
}
// console.log(arraySum([1, 2, 3]) === arraySumLoop([1, 2, 3]));

// ----------------------------------------------------------------------
// 27. Given ['Ali','Sara','Kareem'] produce ['A','S','K'] (first letters) without using map (use for loop).
arr = ["Ali", "Sara", "Kareem"];
res = [];
arr.forEach(function (elem) {
  res.push(elem[0]);
});
// console.log(res);

// ----------------------------------------------------------------------
// 28. Implement unique(a) returning new array with duplicates removed (no ES6 Set). Complexity target: O(n^2) acceptable; comment how to improve.
function unique(a) {
  have = {};
  ret = [];

  function contain(array, key) {
    var flag = false;
    array.forEach(function (e) {
      if (e === key) flag = true;
    });

    return flag;
  }

  a.forEach(function (elem) {
    elem = +elem;
    keys = Object.keys(have).map(function (kk) {
      return +kk;
    }); // map keys to numbers

    if (!contain(keys, elem)) {
      ret.push(elem);
      have[elem] = true;
    }
  });
  return ret;
}

// console.log(unique([1, 1, 1, 2, 2, 3, 4]));

// ----------------------------------------------------------------------
// 29. Flatten one level: flatten1([1,[2,3],[4],5]) => [1,2,3,4,5] without using concat inside a loop (manual pushing and detection of Array).
function flatten1(arr) {
  res = [];
  arr.forEach(function (e) {
    if (e.constructor.name === "Array") {
      console.log(e);
      e.forEach(function (val) {
        res.push(val);
      });
    } else {
      res.push(e);
    }
  });
  return res;
}
// console.log(flatten1([1, [2, 3], [4], 5]));

// ----------------------------------------------------------------------
// 31. Create object person with name and age; add a new property city after creation.
obj = {
  name: "ahmed",
  age: 23,
};
obj.city = "cairo";
// console.log(obj);

// ----------------------------------------------------------------------
// 32. Access a property via bracket notation with a dynamic key variable.
// console.log(obj.name);
// console.log(obj["name"]);

// ----------------------------------------------------------------------
// 33. Write function countKeys(obj) returning number of own enumerable properties (use for-in).
function countKeys(obj) {
  cnt = 0;
  for (const key in obj) {
    cnt += 1;
  }
  return cnt;
}
// console.log(countKeys(obj));

// ----------------------------------------------------------------------
// 39. List (as comments) 5 different values that coerce to false in ES5.
// null, undefined, 0, "", NaN

// ----------------------------------------------------------------------
// 40. safeToBoolean(v): return true only if v is strictly true, 'true', 1, or '1'; else false.
function safeToBoolean(v) {
  return v === "1" || v === 1 || v === true;
}

// ----------------------------------------------------------------------
// 41. Create a Date for Jan 1, 2025 00:00 local.
var monArr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

var date = new Date(2025, 0, 1, 0, 0); // y m d hr min sec

function digits(num, n) {
  // return num as n digits string.
  num = num.toString();
  var diff = n - num.length;
  var padd = "";
  for (var i = 0; i < diff; i++) padd += "0";

  return padd + num;
}

function myFormat(d) {
  year = d.getFullYear(); // 2025
  mon = monArr[d.getMonth()]; // 0-based -> Jan (monArr[0])
  day = d.getDate(); // [1 - 31]
  hrs = d.getHours(); // 24-format hour
  min = d.getMinutes(); // [0 - 59]
  // format: Jan 1, 2025 00:00
  return (
    mon + " " + day + ", " + year + " " + digits(hrs, 2) + ":" + digits(min, 2)
  );
}

console.log(myFormat(date));

// ----------------------------------------------------------------------
// 42. Get the current year from new Date().
// console.log(new Date().getFullYear());

// ----------------------------------------------------------------------
// TODO 43. Write function daysBetween(d1, d2) returning whole day difference (ignore DST intricacies; ms/(1000*60*60*24)).
function daysBetween(d1, d2) {
  // getFullYear()	Get year as a four digit number (yyyy)
  // getMonth()	    Get month as a number (0-11)
  // getDate()        Get day as a number (1-31)

  return;
}

// ----------------------------------------------------------------------
// 44. Generate a random integer 1..100.
// console.log(parseInt(Math.random() * 100 + 1));

// ----------------------------------------------------------------------
// 45. Round 4.567 to nearest integer, round down, and round up (three results).
x = 4.567;
// console.log(Math.round(x));
// console.log(Math.floor(x));
// console.log(Math.ceil(x));

// ----------------------------------------------------------------------
// 46. randomIntArray(n, min, max): return array of length n with random ints (loop + push).
function randomIntArray(n, min, max) {
  ret = [];
  for (var i = 0; i < n; i++) {
    ret.push(parseInt(Math.random() * (max - min + 1) + min));
  }
  return ret;
}
// console.log(randomIntArray(10, 3, 30));

// ----------------------------------------------------------------------
// 56. parsePriceList(str): Given "Apple:2.50;Orange:1.75;Banana:3" return object {Apple:2.5, Orange:1.75, Banana:3} (strings to numbers).
function parsePriceList(str) {
  obj = {};
  res = str.split(";");
  res.forEach(function (e) {
    parts = e.split(":");
    obj[parts[0]] = Number(parts[1]);
  });
  return obj;
}

// console.log(parsePriceList("Apple:2.50;Orange:1.75;Banana:3"));

// ----------------------------------------------------------------------
// 57. filterAndSortNumbers(mixedArray): keep only finite numbers then sort ascending (provide sample input and output). Use a numeric compare fn.
function filterAndSortNumbers(mixedArray) {
  res = mixedArray.filter(function (elem) {
    return Number.isFinite(elem);
  });

  // sort with comparator
  res.sort(function (a, b) {
    return a - b;
  });

  return res;
}
// first 4 numbers, sorted
// console.log(
//   filterAndSortNumbers([1.2, 0, 210, -30, "12a", "-3b", "100", "abs"])
// );
