// 1. Create a module file called 'utils.js' that exports a function named 'greetUser' which takes a name parameter and     .
// Then import and use this function in another file.
import { greetUser } from "./utils.js";
import DataFetcher from "./dataFetcher.js";

// console.log(greetUser("ahmer ezz"));

// 2. Write a Promise that resolves after 2 seconds with the message "Task completed!". Use .then() to log the result to the console.
const myPro = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Task completed!");
  }, 2000);
});

// myPro.then((result) => console.log(result));

// 3. Create an async function called 'waitAndGreet' that uses setTimeout with a Promise to wait 1 second, then returns "Welcome!".
async function waitAndGreet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Welcome!"), 1000);
  });
}

// console.log(await waitAndGreet());

// 4. Write an async function that fetches user data from 'https://jsonplaceholder.typicode.com/users/1' and logs the user's name and email to the console.
async function fetchUserData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await response.json();
    console.log(data.name);
    console.log(data.email);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

// fetchUserData();

// 5. Create a function that fetches the first 3 posts from 'https://jsonplaceholder.typicode.com/posts' and returns only their titles as an array.
async function fetchPostsData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    let firstThree = data.slice(0, 3);
    let result = [];
    firstThree.forEach((element) => {
      result.push(element.title);
    });
    console.log(result);

    //? for fun & practice
    // let [{ title: t1 }, { title: t2 }, { title: t3 }] = data.slice(0, 3);
    // console.log(t1);
    // console.log(t2);
    // console.log(t3);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

// fetchPostsData();

// 6. Create a simple timer function using Promise that counts from 1 to 3, logging each number after 1 second intervals.
async function sleep(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function timer(seconds) {
  for (let time = 1; time <= seconds; time += 1) {
    await sleep(1000);
    console.log(`${time} second(s) passed`);
  }
}

// timer(3);

// 7. Write a function that safely parses JSON data with try/catch. Test it with both valid JSON string '{"name": "Omar"}' and invalid JSON '{name: Omar}'.
function parseJson(obj) {
  try {
    let result = JSON.parse(obj);
    console.log(result);
  } catch (error) {
    console.log("Couldn't parse the json object");
  }
}

// parseJson('{"name": "Omar"}');
// parseJson('{name: Omar}');

// 8. Create an async function that fetches data from 'https://jsonplaceholder.typicode.com/users/1/todos', converts it to JSON, and returns the count of completed todos.
async function fetchTodos() {
  let cnt = 0;
  try {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1/todos"
    );
    let data = await response.json();
    data.forEach((todo) => (cnt += todo.completed));
  } catch (error) {
    console.error(`Todos. Error: ${error}`);
  }

  return cnt;
}

// console.log(await fetchTodos());

// 9. Build a simple module that exports a default class called 'DataFetcher' with a method 'getUser(id)' that fetches and returns user data from the JSONPlaceholder API.
const userData = await DataFetcher.getUser(10);
console.log(userData);
