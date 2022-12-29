import {
  waitform,
  disableNewArrayBtn,
  disableSortingBtn,
  enableNewArrayBtn,
  enableSortingBtn,
  delay,
  disableSizeSlider,
  enableSizeSlider
} from "./sorting.js";

async function insertion() {
  console.log("In insertion()");
  //selecting all bars using class name
  const ele = document.querySelectorAll(".bar");

  ele[0].style.background = "green";
  for (let i = 1; i < ele.length; i++) {
    console.log("In ith loop");
    //insert a new element in sorted partition and then sort is with previous values
    let j = i - 1;
    let key = ele[i].style.height;
    ele[i].style.background = "blue";

    await waitform(delay);

    while (j >= 0 && parseInt(ele[j].style.height) > parseInt(key)) {
      console.log("In while loop");
      ele[j].style.background = "blue";
      ele[j + 1].style.height = ele[j].style.height;
      j--;

      await waitform(delay);

      for (let k = i; k >= 0; k--) ele[k].style.background = "green";
    }
    ele[j + 1].style.height = key;
    ele[i].style.background = "green";
  }
}

const insertionSortBtn = document.querySelector(".insertionSort");
insertionSortBtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableNewArrayBtn();
  disableSizeSlider();
  await insertion();
  enableSortingBtn();
  enableNewArrayBtn();
  enableSizeSlider();
});
