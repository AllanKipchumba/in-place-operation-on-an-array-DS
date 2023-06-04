/** problem statement
 * Given a fixed-length integer array arr, duplicate each occurrence of zero, 
 * shifting the remaining elements to the right.

 *  Note that elements beyond the length of the original array are not written. 
 *  Do the above modifications to the input array in place and do not return anything.
 */
let arr = [1, 0, 2, 3, 0, 4, 5, 0];

const duplicateZeros = (arr) => {
  const length = arr.length;
  let zerosCount = 0;

  //count the number of zeros in the array
  arr.map((item) => {
    if (item === 0) return zerosCount++;
  });

  let i = length - 1; //last index of arr
  let j = length + zerosCount - 1; //last index of arr + zerosCount

  // Handle elements from the end and copy them to their new positions

  /**About the while loop
   * Start at the end of the array and move towards the beginning.
   * Keep going until we reach a specific point where we have finished modifying the array.
   * At each step, we check the current element:
        - If it's not zero, we copy it to a new position, shifting it to the right.
        - If it's a zero, we duplicate it and insert two zeros, shifting the rest of the elements to make room for the duplicates.
   *Move to the previous element and repeat the process until we finish modifying the array.
   *
   */

  while (i !== j) {
    if (arr[i] !== 0) {
      //ensures the array length remains the same
      if (j < length) {
        arr[j] = arr[i];
      }
    } else {
      // Duplicate the zero
      if (j < length) {
        arr[j] = 0;
      }
      //move a step to the right
      j--;

      if (j < length) {
        arr[j] = 0;
      }
    }

    i--;
    j--;
  }
};

duplicateZeros(arr);
console.log(arr);
