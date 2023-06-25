// Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
//Example 1:
let nums = [0,1,0,3,12]
function removeZero(numbers){
    for (let i = numbers.length-1; i>=0; i--){
        numbers[i]===0 && numbers.splice(i, 1) && numbers.push(0)
    }
    return numbers
}
let result=removeZero(nums);
console.log(result)

// question 2
function firstUniqChar(s){
    let obj={}
    for(let char of s){
        if(!obj[char]){
            obj[char]=1
        } else {
            obj[char]++
        }
    }
    for (let key in obj){
        if(obj[key]===1){
            return s.indexOf(key)
        }
    }

    return -1
}

console.log(firstUniqChar('youtube'));