//? constructor function
function Persons(name, pos) {
  this.name = name;
  this.position = pos;
}

// employees data
let employees = [
  {
    name: "Alice Johnson",
    position: "Developer",
    office: "Cairo",
    age: 34,
  },
  { name: "Eve Adams", position: "HR", office: "Aswan", age: 29 },

  { name: "Charlie Brown", position: "Manager", office: "Giza", age: 41 },
  {
    name: "Diana Prince",
    position: "QA Engineer",
    office: "Cairo",
    age: 22,
  },
  {
    name: "Bob Smith",
    position: "Designer",
    office: "Alexandria",
    age: 27,
  },
];

const tableBodyEl = document.getElementsByTagName("tbody")[0];
function renderTable() {
  tableBodyEl.innerHTML = "";

  for (let i = 0; i < employees.length; ++i) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${employees[i].name}</td>
                         <td>${employees[i].position}</td>
                         <td>${employees[i].office}</td>
                         <td>${employees[i].age}</td>`;

    tableBodyEl.appendChild(row);
  }
}

renderTable();

//? event listeners
document.querySelectorAll("thead span").forEach((el) => {
  el.addEventListener("click", function () {
    const field = el.dataset.field;
    const type = el.dataset.type;
    const sort = el.dataset.sort;

    //? sort employees in place
    console.log(field, type, sort);
    sortEmp(field, type, sort);
    renderTable();
  });
});

//? sort method
function sortEmp(field, type, direction) {
  // console.log(field, type, direction);
  // if 'number', convert to number
  const parseValue = (val) => {
    if (type === "number") return Number(val);
    return val.toString().toLowerCase();
  };

  let reversed = direction === "desc" ? -1 : 1;
  employees.sort((a, b) => {
    const va = parseValue(a[field]);
    const vb = parseValue(b[field]);

    if (va < vb) return -1 * reversed;
    if (va > vb) return 1 * reversed;
    return 0;
  });
}

// ----------------------------------------------------
//? Stack
function StackNode(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

function Stack(node = null) {
  this.head = node;
  this.tail = node;
}

Stack.prototype.push = function (val) {
  let newNode = new StackNode(val);
  if (!this.isEmpty()) {
    this.tail.next = newNode;
    newNode.prev = this.tail;
  } else {
    this.head = newNode;
  }

  this.tail = newNode;
};

Stack.prototype.pop = function () {
  if (this.isEmpty()) {
    alert("Error: stack is empty, can't pop");
    return;
  }
  let temp = this.tail.prev;
  if (temp) {
    temp.next = null;
  } else {
    this.head = null;
  }

  this.tail = temp;
};

Stack.prototype.isEmpty = function () {
  return this.head == null;
};

Stack.prototype.print = function () {
  temp = this.head;
  let ret = [];
  while (temp) {
    ret.push(temp.val);
    temp = temp.next;
  }
  return ret;
};

const pushEl = document.getElementById("push");
const popEl = document.getElementById("pop");
const inputEl = document.getElementById("push-input");
const elementsEl = document.getElementById("elements");

let myStk = new Stack();

pushEl.addEventListener("click", function () {
  myStk.push(inputEl.value);
  renderStack();
  inputEl.value = "";
});

popEl.addEventListener("click", function () {
  myStk.pop();
  renderStack();
});

function renderStack() {
  let elements = myStk.print();
  elementsEl.innerHTML = "";
  elements.forEach((el) => {
    const span = document.createElement("span");
    span.textContent = el;
    elementsEl.appendChild(span);
  });
}

// ----------------------------------------------------
//? Inheritance in constructor functions
function Employee(name, age) {
  this.name = name;
  this.age = age;
}

Employee.prototype.sayHi = function () {
  console.log(`${this.name} says hi`);
};

function HourlyEmp(name, age, rate) {
  // Calling Employee constructor function
  Employee.call(this, name, age);
  this.rate = rate;
}

// to extend the prototype
HourlyEmp.prototype = Object.create(Employee.prototype);
HourlyEmp.prototype.constructor = HourlyEmp; 

let emp = new Employee("parent", 40);
let hEmp = new HourlyEmp("child", 23, 22.5);

console.log("employee");
console.log(emp);
emp.sayHi();

console.log("hourly employee");
console.log(hEmp);
hEmp.sayHi();