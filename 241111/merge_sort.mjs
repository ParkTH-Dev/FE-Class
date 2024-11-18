let arr = [3, 5, 2, 4, 1, 7, 8, 6];

const merge = (arr, leftIndex, midIndex, rightIndex) => {
  let leftAreaIndex = leftIndex;
  let rightAreaIndex = midIndex + 1;

  let tempArr = [];

  tempArr.length = rightIndex + 1;

  tempArr.fill(0, 0, rightIndex + 1);

  let tempArrIndex = leftIndex;
  while (leftAreaIndex <= midIndex && rightAreaIndex <= rightIndex) {
    if (arr[leftAreaIndex] <= arr[rightAreaIndex]) {
      tempArr[tempArrIndex] = arr[leftAreaIndex++];
    } else {
      tempArr[tempArrIndex] = arr[rightAreaIndex++];
    }

    tempArrIndex++;
  }
  if (leftAreaIndex > midIndex) {
    for (let i = rightAreaIndex; i <= rightIndex; i++) {
      tempArr[tempArrIndex++] = arr[i];
    }
  } else {
    for (let i = leftAreaIndex; i < midIndex; i++) {
      tempArr[tempArrIndex++] = arr[i];
    }
  }
  for (let i = leftIndex; i <= rightIndex; i++) {
    arr[(i = tempArr[i])];
  }
};

const mergeSort = (arr, leftIndex, rightIndex) => {
  if (leftIndex < rightIndex) {
    let midIndex = parseInt(leftIndex + rightIndex) / 2;
    mergeSort(arr, leftIndex, midIndex);
    mergeSort(arr, midIndex + 1, rightIndex);
    merge(arr, leftIndex, midIndex, rightIndex);
  }
};

console.log("=== 정렬 전 ===");
console.log(arr);

mergeSort(arr, 0, arr.length - 1);

console.log("=== 정렬 후 ===");
console.log(arr);
