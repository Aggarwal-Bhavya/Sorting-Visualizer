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

async function selection() {
  console.log("In selection()");
  //selecting all bars using class name
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length; i++) {
    console.log("In ith loop");
    let min_index = i;

    //change color of the position to swap with the next min
    ele[i].style.background = "blue";
    for (let j = i + 1; j < ele.length; j++) {
      console.log("In jth loop");
      //change color for the current comparison (in consideration of min_index)
      ele[j].style.background = "red";

      await waitform(delay);
      if (
        parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)
      ) {
        console.log("In if condition");
        if (min_index !== i) {
          //new min_index is found so change min_index color back to normal
          ele[min_index].style.background = "cyan";
        }
        min_index = j;
      } else {
        //if the current comparsion is more than min_index change it back to normal
        ele[j].style.background = "cyan";
      }
    }

    await waitform(delay);
    swap(ele[min_index], ele[i]);
    //change the min element index back to normal as it is swapped
    ele[min_index].style.background = "cyan";
    //change the sorted element's color to green
    ele[i].style.background = "green";
  }
}
const selectionSortBtn = document.querySelector(".selectionSort");
selectionSortBtn.addEventListener("click", async function () {
  disableSortingBtn();
  disableNewArrayBtn();
  disableSizeSlider();
  await selection();
  enableSortingBtn();
  enableNewArrayBtn();
  enableSizeSlider();
});
