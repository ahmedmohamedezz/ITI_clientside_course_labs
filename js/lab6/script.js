function Persons(name, pos) {
  this.name = name;
  this.position = pos;
}

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

const tableEl = document.getElementById("emp");

function renderTable() {
  tableEl.innerHTML = `
    <tr>
        <th>
          <div class="sort">
            name
            <span data-field="name" data-type="string" data-sort="asc"
              >&#8593;</span
            >
            <span data-field="name" data-type="string" data-sort="desc"
              >&#8595;</span
            >
          </div>
        </th>

        <th>
          <div class="sort" data-field="position" data-type="string">
            position
            <span data-field="position" data-type="string" data-sort="asc"
              >&#8593;</span
            >
            <span data-field="position" data-type="string" data-sort="desc"
              >&#8595;</span
            >
          </div>
        </th>

        <th>
          <div class="sort" data-field="office" data-type="string">
            office
            <span data-field="office" data-type="string" data-sort="asc"
              >&#8593;</span
            >
            <span data-field="office" data-type="string" data-sort="desc"
              >&#8595;</span
            >
          </div>
        </th>

        <th>
          <div class="sort" data-field="age" data-type="number">
            age
            <span data-field="age" data-type="number" data-sort="asc"
              >&#8593;</span
            >
            <span data-field="age" data-type="number" data-sort="desc"
              >&#8595;</span
            >
          </div>
        </th>
      </tr>
  `;

  for (let i = 1; i <= employees.length; ++i) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${employees[i - 1].name}</td>
                         <td>${employees[i - 1].position}</td>
                         <td>${employees[i - 1].office}</td>
                         <td>${employees[i - 1].age}</td>`;

    tableEl.appendChild(row);
  }

  Array.from(document.getElementsByTagName("span")).forEach((el) => {
    el.addEventListener("click", function () {
      const field = el.dataset.field;
      const type = el.dataset.type;
      const sort = el.dataset.sort;

      // console.log(field, type, sort)
      sortEmp(field, type, sort);
      renderTable();
    });
  });
}

renderTable();

function sortEmp(field, type, direction) {
  const parseValue = (val) => {
    if (type === "number") return Number(val);
    return val.toString().toLowerCase();
  };

  employees.sort((a, b) => {
    const va = parseValue(a[field]);
    const vb = parseValue(b[field]);

    if (va < vb) return -1;
    if (va > vb) return 1;
    return 0;
  });

  direction === "desc" ? employees.reverse() : employees;
}

//* -------- stack using constructor functions ---------
function Node(value = -1e9) {
  this.val = value;
  this.next = null;
  this.prev = null;
}

function Stack() {
  // Structure: head -> node -> node -> tail
  this.head = null;
  this.tail = null;
}

// add methods on the prototype, not every object
Stack.prototype.push = function (value) {
  let newNode = new Node(value);

  if (this.head === null) {
    // if list is empty
    this.head = this.tail = newNode;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
};

Stack.prototype.pop = function () {
  if (this.head === null) {
    alert("Can't pop from an empty linked list");
    return;
  }

  let temp = this.tail;
  if (temp.prev) {
    // there is a previous node (the list has more than 1 node)
    this.tail = temp.prev;

    // remove references to temp
    this.tail.next = null;
    temp = null;
  } else {
    // only one node in the list
    this.head = this.tail = null;
  }
};

Stack.prototype.print = function () {
  let cur = this.head;
  let ret = [];
  while (cur !== null) {
    ret.push(cur.val);
    cur = cur.next;
  }
  console.log(ret);
};

// starter code
const lst = new Stack();
const container = document.getElementById("container");

function render() {
  container.innerHTML = "";
  let cur = lst.head;
  while (cur) {
    const div = document.createElement("div");
    div.className = "node";
    div.textContent = cur.val;
    container.appendChild(div);
    cur = cur.next;
  }
}

function push() {
  let nodeVal = document.getElementById("val");
  if (nodeVal.value !== "") lst.push(nodeVal.value);
  nodeVal.value = "";
  render();
}

function pop() {
  lst.pop();
  render();
}

// begin with 1 node
lst.push(50);
render();

//* -------- constructor functions inheritance ---------
function Vehicle(tiresCnt) {
  this.tiresCnt = tiresCnt;
}

Vehicle.prototype.getTiresCount = function () {
  console.log("Tires count: " + this.tiresCnt);
};

function Car(model) {
  // call & intialize parent constructor
  Vehicle.call(this, 4);

  // set my own properties
  this.model = model;
}

// inherit prototype
Car.prototype = Object.create(Vehicle.prototype);

// without this statement, Car constructor will be `Vehicle()`
Car.prototype.constructor = Car;

Car.prototype.getModel = function () {
  console.log("Car model: " + this.model);
};

console.log("------- MotorCycle -------");
var motorCycle = new Vehicle(2);
motorCycle.getTiresCount();
console.log("constructor: " + motorCycle.__proto__.constructor.name);

console.log("");
console.log("");

console.log("------- Car -------");
var car = new Car(2);
car.getTiresCount();
car.getModel();
console.log("constructor: " + car.__proto__.constructor.name);

alert("look at the console to see prototype inheritance example");
