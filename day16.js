// two sum - leetcode
// [2,7,11,15], target - 9  -> outPut [0,1]
const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let curVal = nums[i];
    if (map.has(curVal)) {
      return [map.get(curVal), i];
    }
    map.set(target - curVal, i);
  }
};
// console.log(twoSum([2, 7, 11, 15], 9));

//longest substring without repeating charecters - leetcode
//abcabcbb  -> 3
var lengthOfLongestSubstring = (str) => {
  let arr = str.split("");
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      return map.size;
    }
    map.set(arr[i], i);
  }
};
console.log(lengthOfLongestSubstring("pwwkew"));
