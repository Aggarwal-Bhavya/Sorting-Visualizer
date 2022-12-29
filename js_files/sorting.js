//swap function for sorting algorithms to take input of 2 DOM elements with style.height features
export function swap(ele1, ele2) {
  console.log("In swap()");
  var temp = ele1.style.height;
  ele1.style.height = ele2.style.height;
  ele2.style.height = temp;
}

//disable sorting buttons used in conjuction with enable, so that we can disable orting and enable buttons after it
export function disableSortingBtn() {
  document.querySelector(".bubbleSort").disabled = true;
  document.querySelector(".selectionSort").disabled = true;
  document.querySelector(".insertionSort").disabled = true;
  document.querySelector(".quickSort").disabled = true;
  document.querySelector(".mergeSort").disabled = true;
}

//enables sorting buttons, used in conjuction of disable
export function enableSortingBtn() {
  document.querySelector(".bubbleSort").disabled = false;
  document.querySelector(".selectionSort").disabled = false;
  document.querySelector(".insertionSort").disabled = false;
  document.querySelector(".quickSort").disabled = false;
  document.querySelector(".mergeSort").disabled = false;
}

//disbales size slider used in conjusction with enable so that we can disable when sorting in action and enable after completeion
export function disableSizeSlider() {
  document.querySelector("#arr_size").disabled = true;
}

//enables size slider after sorting is completed
export function enableSizeSlider() {
  document.querySelector("#arr_size").disabled = false;
}

//disables newArray btn while sorting is in action
export function disableNewArrayBtn() {
  document.querySelector(".newArray").disabled = true;
}

//enables new array button after sorting is completed
export function enableNewArrayBtn() {
  document.querySelector(".newArray").disabled = false;
}

//used in async function so that we can do animations of sorting
export function waitform(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

//Selecting size slider from DOM
let arraySize = document.querySelector("#arr_size");

//Event listener to update the bars on DOM
arraySize.addEventListener("input", function () {
  console.log(arraySize.value, typeof arraySize.value);
  createNewArray(arraySize.value);
});

//default input for waitform function (260ms)
export let delay = 260;

//selecting speed slider from DOM
let delayElement = document.querySelector("#speed_input");

//Event Listener to update sorting delay
delayElement.addEventListener("input", function () {
  console.log(delayElement.value, typeof delayElement.value);
  delay = 320 - parseInt(delayElement.value);
});

//creating array to store randomly generated numbers
let array = [];

//Call to display default bars right when site is visited
createNewArray();

//to create new array input size of array
function createNewArray(noOfBars = 60) {
  //calling helper function to delete old bars from dom
  deleteChild();

  //creating an array of random numbers
  array = [];
  for (let i = 0; i < noOfBars; i++) {
    array.push(Math.floor(Math.random() * 250) + 1);
  }
  console.log(array);

  //select the div #bars element
  const bars = document.querySelector("#bars");

  //create multiple element div using loop and adding class 'bar col'
  for (let i = 0; i < noOfBars; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${array[i] * 2}px`;
    bar.classList.add("bar");
    bar.classList.add("flex-item");
    bar.classList.add(`barNo${i}`);
    bars.appendChild(bar);
  }
}

//Helper function to delete all the previous bars so that new can be added
function deleteChild() {
  const bar = document.querySelector("#bars");
  bar.innerHTML = "";
}

//selecting new array button to add event listener
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function () {
  console.log("Form newArray" + arraySize.value);
  console.log("From newArray" + delay);
  enableSortingBtn();
  enableSizeSlider();
  createNewArray(arraySize.value);
});
