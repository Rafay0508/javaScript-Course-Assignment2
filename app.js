// Question : 01
// Write a function that creates a closure and returns a function that can add a specific number to any number passed to it. For example, if the closure is created with 5, the returned function should add 5 to any number passed to it.

function createAdder(num) {
  return function (x) {
    return x + num;
  };
}
const addFive = createAdder(5);
console.log(addFive(10));

// Question : 02
// Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You can assume that the array is not nested.

const Arr = [1, 2, 3, 4, 5];

function searchArray(array, value) {
  if (array.length === 0) {
    return false;
  } else if (array[0] === value) {
    return true;
  } else {
    return searchArray(array.slice(1), value);
  }
}
console.log(searchArray(Arr, 2));

// Question : 03
// Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be used as the text content of the new paragraph element.

function addParagraph(text) {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = text;
  document.body.appendChild(newParagraph);
}

addParagraph("New Paragraph is created");

// Question : 04
// Write a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument that will be used as the text content of the new list item.

function addListItem(text) {
  const newListElement = document.createElement("li");
  newListElement.textContent = text;
  const unorderedList = document.querySelector("ul");
  unorderedList.appendChild(newListElement);
}
addListItem("New list item");

// Question : 05
// Write a function that changes the background color of an HTML element. The function should take two arguments: the first argument is a reference to the HTML element, and the second argument is a string representing the new background color.

function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}
const myElement = document.getElementById("bgColor");
changeBackgroundColor(myElement, "red");

// Question : 06
// Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string representing the key to use for storing the object, and the second argument is the object to store.

function saveToLocalStorage(key, obj) {
  const json = JSON.stringify(obj);
  localStorage.setItem(key, json);
}

const Obj = { name: "Abdul Rafay", age: 21 };
saveToLocalStorage("myObject", Obj);

// Question : 07
// Write a function that retrieves an object from localStorage. The function should take one argument, which is a string representing the key used to store the object. The function should return the object.

function retreiveFromLocalStorage(key) {
  let data = localStorage.getItem(key);
  console.log(JSON.parse(data));
}
retreiveFromLocalStorage("myObject");

// Question : 08
// Write a function that takes an object and saves each property to localStorage using the property name as the key and the property value as the value. The function should also retrieve the object from localStorage and return it as a new object.

function saveObjectToLocalStorage(obj) {
  Object.keys(obj).forEach((key) => {
    localStorage.setItem(key, JSON.stringify(obj[key]));
  });

  // Retrieve each property from localStorage
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    const json = localStorage.getItem(key);
    newObj[key] = JSON.parse(json);
  });
  return newObj;
}

const myObj = { myname: "rafay", myage: 21 };
const newObj = saveObjectToLocalStorage(myObj);
console.log(newObj);
