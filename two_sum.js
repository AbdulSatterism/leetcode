// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const twoSum = (nums, target) => {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
    
        if (map.has(complement)) {
        return [map.get(complement), i];
        }
    
        map.set(nums[i], i);
    }
    
    return [];
}

//! time complexity: O(n)
//! space complexity: O(n)
// console.log(twoSum([2, 7, 11,10,5, 15], 15))



//another approch

const twoSump = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    
    return [];
}

//! time complexity: O(n^2)
//! space complexity: O(1)
console.log(twoSump([2, 7, 11,10,5, 15], 15))
