// sort_1:
  const unsortedArray = [7, 8, 5, 6, 2];

  function sortArray(unsortedArray) {
    let sortedArray = unsortedArray.slice(); // Create a copy of the unsorted array
    console.log(sortedArray)

    for (let i = 0; i < sortedArray.length - 1; i++) {
      for (let j = 0; j < sortedArray.length - i - 1; j++) {
        if (sortedArray[j] > sortedArray[j + 1]) {
          // Swap elements if they are in the wrong order
          let temp = sortedArray[j];
          sortedArray[j] = sortedArray[j + 1];
          sortedArray[j + 1] = temp;
        }
      }
    }

    return sortedArray;
  }

  const sortedArray = sortArray(unsortedArray);
  console.log(sortedArray);

// sort_2:
//   const array = [7, 8, 5, 6, 2];

//   function sortArray(array) {
//     for (let i = 0; i < array.length - 1; i++) {
//       for (let j = 0; j < array.length - i - 1; j++) {
//         if (array[j] > array[j + 1]) {
//           // Swap elements if they are in the wrong order
//           let temp = array[j];
//           array[j] = array[j + 1];
//           array[j + 1] = temp;
//         }
//       }
//     }
//   }

//   sortArray(array);
//   console.log(array);
