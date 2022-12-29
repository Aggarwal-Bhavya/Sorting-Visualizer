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

async function merge(ele, low, mid, high) {
  console.log("In merge()");
  console.log(`low=${low}, mid=${mid}, high=${high}`);
  const n1 = mid - low + 1;
  const n2 = high - mid;
  console.log(`n1=${n1}, n2=${n2}`);
  let left = new Array(n1);
  let right = new Array(n2);

  for (let i = 0; i < n1; i++) {
    await waitform(delay);
    console.log("In left merge loop");
    console.log(ele[low + i].style.height + "at" + (low + i));
    //color
    ele[low + i].style.background = "blue";
    left[i] = ele[low + i].style.height;
  }

  for (let i = 0; i < n2; i++) {
    await waitform(delay);
    console.log(`In right merge loop`);
    console.log(ele[mid + 1 + i] + "at" + (mid + 1 + i));
    //color
    ele[mid + 1 + i].style.background = "yellow";
    right[i] = ele[mid + 1 + i].style.height;
  }

  await waitform(delay);
  let i = 0,
    j = 0,
    k = low;
  while (i < n1 && j < n2) {
    await waitform(delay);
    console.log("In merge while loop");
    console.log(parseInt(left[i]), parseInt(right[j]));

    //adding colour to the two comparisons
    if (parseInt(left[i]) <= parseInt(right[j])) {
      console.log("In merge ehile loop if condition");
      if (n1 + n2 === ele.length) ele[k].style.background = "green";
      else ele[k].style.background = "lightgreen";

      ele[k].style.height = left[i];
      i++;
      k++;
    } else {
      console.log("In while loop else condition");
      if (n1 + n2 === ele.length) ele[k].style.background = "green";
      else ele[k].style.background = "lightgreen";

      ele[k].style.height = right[j];
      j++;
      k++;
    }
  }
  while (i < n1) {
    await waitform(delay);
    console.log("In while loop if n1 is left");
    if (n1 + n2 === ele.length) ele[k].style.background = "green";
    else ele[k].style.background = "lightgreen";
    ele[k].style.height = left[i];
    i++;
    k++;
  }
  while (j < n2) {
    console.log("In while loop if n2 is left");
    if (n1 + n2 === ele.length) ele[k].style.background = "green";
    else ele[k].style.background = "lightgreen";

    ele[k].style.height = right[j];
    j++;
    k++;
  }
}

async function mergeSort(ele, l, r) {
  console.log("In mergeSort()");
  if (l >= r) {
    console.log(`return cause just 1 elemment l=${l}, r=${r}`);
    return;
  }
  const m = l + Math.floor((r - l) / 2);
  console.log(`left=${l} mid=${m} right=${r}`, typeof m);
  await mergeSort(ele, l, m);
  await mergeSort(ele, m + 1, r);
  await merge(ele, l, m, r);
}

const mergeSortBtn = document.querySelector(".mergeSort");
mergeSortBtn.addEventListener("click", async function () {
  let ele = document.querySelectorAll(".bar");
  let l = 0;
  let r = parseInt(ele.length) - 1;
  disableSortingBtn();
  disableNewArrayBtn();
  disableSizeSlider();
  await mergeSort(ele, l, r);
  enableSortingBtn();
  enableNewArrayBtn();
  enableSizeSlider();
});
