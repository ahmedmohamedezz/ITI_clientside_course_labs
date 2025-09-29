// 1. Predict (in comments) the output order of this code, then run to verify.
//  console.log(a());   // 'A'
//  var b = function(){ return 'B'; };
//  function a(){ return 'A'; }
//  console.log(b());   // 'B'
//    After verifying, explain (one short line) why a works before definition and b does not.
// explanation: both will work as function statements (declarations) are hoisted

// 2. Rewrite a function declaration sum(a,b) into a function expression stored in a variable named add and confirm both produce same result for (3,4).
function sum(a, b) {
  return a + b;
}
const add = (a, b) => a + b;
// console.log(add(3, 4)); // 7
// console.log(sum(3, 4)); // 7

// 3. Create a named function expression assigned to var factorial. Use the internal name ONLY for recursion. Log factorial(5). Show (comment) that the internal name is not global.
const factorial = function f(n) {
  if (n <= 1) return 1;

  return n * f(n - 1);
};

// console.log(f(5));   // error: f is not defined
// console.log(factorial(5));   // 120

// 4. Write a function showInfo that logs arguments.length and each argument. Call it with 0, then 2, then 5 arguments.
function showInfo() {
  console.log(`len: ${arguments.length}`);
  for (let i = 0; i < arguments.length; ++i) console.log(arguments[i]);
}
// showInfo()
// showInfo(1, 2)
// showInfo(1, 2, 3, 4, 5)

// 5. Write a function mutate(x,y) that changes x and y inside and shows arguments[0] / arguments[1] before and after. Explain result in a comment.
// the result will change if x, y are mutated, because 'arguments' object has references to the method args.
// and we change the values the reference refer to
function mutate(x, y) {
  console.log(`before: ${arguments[0] / arguments[1]}`);
  x = 100;
  y = 20;
  console.log(`after: ${arguments[0] / arguments[1]}`);
}

// mutate(4, 2);

// 6. Implement sumAll() using only the arguments object (no arrays) to total all numeric arguments. Test sumAll(2,5,3) and sumAll().
function sumAll() {
  let tot = 0;
  for (let i = 0; i < arguments.length; ++i) tot += arguments[i];

  return tot;
}
// console.log(sumAll());             // 0
// console.log(sumAll(2, 5, 3));      // 10

// 7.  Implement sumAll() using only the arguments object but with the Array method reduce.
function sumAll() {
  // short ans: DIRECTLY, WE CAN'T
  // arguments is an 'array like' object, not a real array. so, we can't use reduce directly on in unless it's converted to array
  return Array.from(arguments).reduce((tot, cur) => (tot += cur), 0);
}
// console.log(sumAll());             // 0
// console.log(sumAll(2, 5, 3));      // 10

// 8. Write describeValue that returns different strings based on number of args: 0 -> 'none', 1 -> 'one:'+val, 2 -> 'two:'+a+','+b else 'too many'.
function describeValue() {
  switch (arguments.length) {
    case 0:
      console.log("none");
      break;
    case 1:
      console.log(`one:${arguments[0]}`);
      break;
    case 2:
      console.log(`two:${arguments[0]}, ${arguments[1]}`);
      break;
    default:
      console.log("too many");
      break;
  }
}
// describeValue();
// describeValue(0);
// describeValue(0, 1);
// describeValue(0, 1, 2);

// 9. Create an array funcs of three small anonymous functions that transform a number. Apply them in order to start = 10 (loop). Log final result.
// let funcs = [(n) => n - 1, (n) => n - 2, (n) => n + 3];

// let start = 10;
// // 10 => 9 => 7 => 10
// for (let i = 0; i < funcs.length; i++) {
//   start = funcs[i](start);
// }
// console.log(start);

// 10. Write makeMultiplier(factor) returning a function(n) that multiplies. Create double and triple; test with 7.
function makeMultiplier(factor) {
  return (n) => n * factor;
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);
// console.log(double(3));  //  6
// console.log(triple(3));  // 9

// 11. Implement once(fn) runs fn only first time, returns its return value. Test with a function that logs and returns a string.
// function once(fn) {
//   let firstTime = true;
//   return function (str) {
//     if (firstTime) {
//       firstTime = false;
//       return fn(str);
//     }
//   };
// }

// function logAndReturn(str) {
//   console.log(str);
//   return str;
// }

// const test = once(logAndReturn);
// test("ITI-ISI");
// test("ITI-ISI");
// test("ITI-ISI");

// 12. (Bonus) Modify once so subsequent calls return the FIRST result (like a memo of zero-arg function). Keep original version comment above for comparison.
// function once(fn) {
//   let firstTime = true;
//   let memo;
//   return function () {
//     if (firstTime) {
//       firstTime = false;
//       memo = fn();
//       return memo;
//     }
//     console.log("cached");
//     return memo;
//   };
// }
// const test2 = once(() => {
//   return 100 * 100;
// });

// console.log(test2()); // 10000
// console.log(test2()); // cached + 10000

// 13. (Bonus) Implement makeCounter(start) that returns { inc: fn, dec: fn, value: fn }. State stays private. Demonstrate two independent counters.
function makeCounter(start) {
  let count = start;
  return {
    inc: function () {
      count++;
    },
    dec: function () {
      count--;
    },
    value: function () {
      return count;
    },
  };
}

const counter1 = makeCounter(-2);
const counter2 = makeCounter(50);

counter1.inc();
counter1.inc();

counter2.dec();

// console.log(counter1.value()); // 0
// console.log(counter2.value()); // 49

// 14. makeAdder(start) returns a function that adds its argument to internal total and returns current total each call.
// Demonstrate separate instances.
function makeAdder(start) {
  let tot = start;
  return function (arg) {
    tot += arg;
    return tot;
  };
}

const adder = makeAdder(5); // tot = 5
// console.log(adder(5));    // 10
// console.log(adder(5));    // 15

// 15. Implement memoize1(fn). Show it caches slowSquare(9) twice.
function memoize1(fn) {
  let cache = {};
  return function (arg) {
    if (!cache[arg]) {
      cache[arg] = fn(arg);
    } else {
      console.log("cached");
    }

    console.log(cache[arg]);
  };
}

function slowSquare(x) {
  return x * x;
}

memo = memoize1(slowSquare);
// memo(9);
// memo(9);    // cached

// 16. (Bonus) Implement memoizeN(fn) that supports any number of primitive args by joining them with '|' as a key. Show with add3(a,b,c).
function memoizeN(fn) {
  let cache = {};
  return function (...args) {
    const key = args.join("|");
    if (!cache[key]) {
      cache[key] = fn(...args);
    } else {
      console.log(`cached: ${key}`);
    }

    console.log(cache[key]);
  };
}

function add3(a, b, c) {
  return a + b + c;
}

memoN = memoizeN(add3);
// memoN(1, 2, 3);
// memoN(1, 2, 3);

// 17. Make object user with name and method sayHi logging 'Hi NAME'. Call sayHi, then assign var f = user.sayHi; call f(). Explain (comment) output difference.
const user = {
  name: "ITI",
  sayHi: function () {
    console.log(`HI ${this.name}`);
  },
};
// user.sayHi(); // HI ITI
// f = user.sayHi;
// f(); // HI
// this in f() refers to 'window' object

// 18. Re-use sayHi but call it with another object { name: 'Sara' } using two different ways.
const user2 = {
  name: "Sara",
};

// user.sayHi.call(user2);
// user.sayHi.apply(user2);

// 19. Create greeter.greet(greeting,sign). Use apply to invoke it on { name: 'Ali' } with 'Hello','!'.
const user3 = {
  name: "Sara",
};

const greeter = {
  greet: function (greeting, sign) {
    console.log(`${greeting} ${this.name} ${sign}`);
  },
};

// greater.greet.apply(user3, ["Hello", "!"]);

// 20. Bind greet to { name:'Lara' } as greetLara (no preset greeting). Call with different greetings.
const user4 = {
  name: "Lara",
};

const greetLara = greeter.greet.bind(user3);
// greetLara("Hi", "!");
// greetLara("Hola", "...");

// 21. Bind greet to produce a sayHello(obj) that always uses greeting 'Hello' but variable sign(!,*,!!,<#).
function sayHello(obj) {
  return function (sign) {
    // when called, complete the bind & get the result
    const temp = greeter.greet.bind(obj, "Hello", sign);
    temp();
  };
}
const greetWithSignOnly = sayHello({ name: "ITI - ISI" });
// greetWithSignOnly("!");
// greetWithSignOnly("*%$&!");

// 22. Use slice inside a function to convert its arguments(remember it is an array like) to a real array and log reversed copy without mutating original.
function fn() {
  console.log(`arguments: `);
  for (let i = 0; i < arguments.length; ++i) console.log(arguments[i]);

  res = Array.prototype.slice.call(arguments);
  res.reverse();
  console.log(res);
}
// fn(1, 2, 3);

// 23. Given arr = [5,2,11,7] find max WITHOUT loop using max(). Then show an alternative with a loop.
let arr = [5, 2, 11, 7];
// console.log(Math.max.apply(null, arr)); // call => pos. args, apply: => array of args

mx = -Infinity;
for (let i = 0; i < arr.length; ++i) mx = Math.max(mx, arr[i]);
// console.log(mx);

// 24. Demonstrate calling Math.max with individual numbers using call and explain why apply is better.
// console.log(Math.max.call(1)); // -Infinity
// console.log(Math.max.call(1, 2, 20)); // 20
// suppose I have 'n' numbers (n >= 1e3), it doesn't make since to pass 1000 argument to a function. instead put them in arr & use apply

// 25. Convert string concatenation 'User: '+name+' Age: '+(age+1) into a template literal equivalent.
let name = "john doe";
let age = 109;
// console.log(`User: ${name} Age: ${age + 1}`);

// 26. Create a multi-line template with variables title and body and log it; show classical \n build version for contrast.
let good = `
title: test
body: bla bla bla

`;

let bad = "title: test\nbody: bla bla bla";
// console.log(good);
// console.log(bad);

// 27. Write a block with var i and let j inside if(true) and log both inside and outside. Comment which leaks.
// var doesn't have a block scope. either global or function. so, it will be visible outside of the block and this may cause problems
// let have a block scope. so, it more safe to use
if (true) {
  var i = 5;
  let j = 10;
  // console.log("inside", i, j); // 5   10
}
// console.log("outside", i, j); // (error: j is not defined)

// 28. Write code that tries to log x before let x = 5;.
// console.log(x);   // error: acces x befor init.
let x = 5;

// 29. Show that pushing to a const array works but reassigning it does not (comment error you would get if attempted—do not actually break execution).
const ar = [1, 2];
ar.push(3); // works
// ar = [1,2,3];   // Uncaught TypeError: Assignment to constant variable.

// 30. Rewrite a normal function square(n) { return n*n; } as arrow in three forms: full body, concise, inline in map over [1,2,3].
const sq = (n) => {
  return n * n;
};
const sq2 = (n) => n * n;

let nums = [1, 2, 3];
let squares = nums.map((n) => n * n);
// console.log(squares);   // [1,4,9]

// 31. Create object timer with count:0 and method startClassic using setInterval(function(){...}) and startArrow using setInterval(()=>{...}).
// Show difference in how this works (stop after a few increments using clearInterval).

// arrow functions doesn't bind 'this', so, it will refer to the object that contains it
const timer = {
  count: 0,
  startClassic: function () {
    console.log("regular function");
    let id1 = setInterval(function () {
      this.count++;
      console.log(`classic: ${this.count}`);
      if (this.count >= 5) clearInterval(id1);
    }, 1000);
  },
  startArrow: function () {
    console.log("arrow function");
    let id2 = setInterval(() => {
      this.count++;
      console.log(`arrow: ${this.count}`);
      if (this.count >= 3) clearInterval(id2);
    }, 1000);
  },
};
// timer.startClassic();    // will never stop, becuase this.count = window.count = undefined
// timer.startArrow();       // will stop after 3 seconds, because this refers to timer object

// 32. Write an arrow function that returns an object {v:10}. Show the need for parentheses.
const fun = () => {
  v: 10;
};
const fun2 = () => ({ v: 10 });
// console.log(fun());   // undefined, because {} are interpreted as a function body
// console.log(fun2());  // {v:10}

// 33. Give one example where arrow is a bad choice (e.g., method needing dynamic this).
const arrow = {
  fn: () => {
    console.log(this.location.href);
  },
};

const classic = {
  fn: function () {
    console.log(this.location.href);
  },
};

// arrow.fn();     // access window
// classic.fn();   // error

// 34. Start with function greet(name){ return 'Hi '+name+'!'; } Convert to arrow function using Const not let ya habeby :).
const greet = (name) => "Hi " + name + "!";
// console.log(greet("test"));

// 35. Build pipeline functions: add2, times3, minus1 (all arrows). Write runPipeline(n, fnsArray) that loops through and applies each. Test runPipeline(5, [add2,times3,minus1]).
const add2 = (n) => n + 2;
const times3 = (n) => n * 3;
const minus1 = (n) => n - 1;
function runPipeline(n, fnsArray) {
  for (let i = 0; i < fnsArray.length; ++i) n = fnsArray[i](n);

  return n;
}
// console.log(runPipeline(5, [add2, times3, minus1]));

// 36. (write answers BEFORE running):
var obj = {
  n: 1,
  inc: function () {
    this.n++;
    return this.n;
  },
};
var inc = obj.inc;
// console.log(obj.inc());      // 2
// console.log(inc());          // NaN, or error
//    Explain both lines: the first will be called properly and return 2.
//        in the second example 'this' refers to the window

// 37. Create many counters in a loop (e.g. 1000) and store them in an array. Comment on potential memory considerations of large closure arrays.
function makeCounter(start) {
  let count = start;
  return {
    inc: function () {
      count++;
    },
    dec: function () {
      count--;
    },
    value: function () {
      return count;
    },
  };
}
const lst = Array(100000).fill(makeCounter(0));
// if we didn't clear the array, all the closures will stay in memory (and can't be collected as garbage)

// 38. Write safeFirst() that returns undefined if called with zero args else return array of the args.
function safeFirst() {
  if (arguments.length) {
    return Array.from(arguments);
  }

  return undefined;
}

// 39. factory(namesArray) returns object with a counter function for each name (all independent). Example: var counters = factory(['a','b']); counters.a(); counters.b();
function factory(namesArray) {
  let obj = {};
  for (let name of namesArray) {
    let cnt = 0;
    obj[name] = () => {
      cnt += 1;
      console.log(cnt);
    };
  }
  return obj;
}
let counters = factory(["a", "b"]);
counters.a();
counters.a();
counters.b();
// 40. Write 2 things that were new or tricky today (comment).
// 1. changing the scope of 'this' (obj.sayHi() and x = obj.sayHi)
// 2. Q38 need research
// 3. Q39 adding fun. names from strings + if we replaced 'let' with 'var' in the 'let cnt = 0;', it won't work because var has no block-scope
// while let creates a new cnt every iterations, and closures 'close over variables' (different cnt)
