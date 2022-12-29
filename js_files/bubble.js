import {
  swap,
  waitform,
  disableNewArrayBtn,
  disableSortingBtn,
  enableNewArrayBtn,
  enableSortingBtn,
  delay,
  disableSizeSlider,
  enableSizeSlider
} from "./sorting.js";

async function bubble() {
  console.log("In bubble()");
  //selecting all bars using class name
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length - 1; i++) {
    console.log("In ith loop");
    for (let j = 0; j < ele.length - i - 1; j++) {
      console.log("In jth loop");

      //assigning blue colour to two bars to showcase their comparison
      ele[j].style.background = "blue";
      ele[j + 1].style.background = "blue";

      //height check is equivalent to value check
      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
        console.log("In if condition");
        await waitform(delay);
        swap(ele[j], ele[j + 1]);
      }
      ele[j].style.background = "cyan";
      ele[j + 1].style.background = "cyan";
    }
    ele[ele.length - i - 1].style.background = "green";
  }
  ele[0].style.background = "green";
}

const bubbleSortBtn = document.querySelector(".bubbleSort");
bubbleSortBtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableNewArrayBtn();
  disableSizeSlider();
  await bubble();
  enableSortingBtn();
  enableNewArrayBtn();
  enableSizeSlider();
});
