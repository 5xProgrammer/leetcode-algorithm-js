/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
// 070322
var twoSum = function(nums, target) {
  let result = [];
  // n 끼리 더했을 때 target이 나오면 그 index를 return 해야한다
  for(let i=0; i<nums.length; i++){
      for(let j=i+1; j<nums.length; j++){
          if(nums[i] + nums[j] === target){
              result.push(i);
              result.push(j);
              return result;
          }
      }
  }
};

