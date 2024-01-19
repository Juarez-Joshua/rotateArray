/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function rotate(nums, k) {
  //check if k wraps around the array more than once, find total spots actually needed to move
  const numMoves = k % nums.length;
  //if they'd stay in place, return array
  if (numMoves === 0) {
    return nums;
  } else {
    //set up array that will have correct order
    let correctOrder = new Array(nums.length);
    const lastIndex = nums.length - 1;
    //loop through each index in nums array starting at the rear
    for (let i = 0; i < nums.length; i++) {
      //what the index after k moves is suppposed to be
      let newIndex = i + numMoves;
      //does it wrap to front?
      if (newIndex > lastIndex) {
        correctOrder[newIndex - (lastIndex + 1)] = nums[i];
      } else {
        correctOrder[newIndex] = nums[i];
      }
    }
    return correctOrder;
  }
};

console.log(rotate([1,2,3,4,5,6,7], 3))
