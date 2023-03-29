/**
 * This function uses Java script build in sorting function
 * its time complexity B(O) = n*log(n)
 * this makes the overall time complexity of solution function is n + n*log(n)
 * for the worst case and when simplifying the equation it becomes n*log(n)
 * 
 * This problem could be solved in many approaches such as using different types
 * of sorting like quick sort, bubble sort, etc. or it could be solved with searching
 * algorithm but this would make tings worst as the time complexity will be big
 *  
 * @param {Array[number]} nums 
 * @returns number
 */
const solution = (nums) => {
  const sorted = nums.sort((a, b) => a - b);
  for (let index = 0; index < sorted.length; index++) {
    const num = sorted[index];
    if (num !== index) {
      return index;
    }
  }

  return nums.length;
};

let nums = [3, 0, 1];
nums =[9,6,4,2,3,5,7,0,1]
nums = [0,1]

console.log(solution(nums));
