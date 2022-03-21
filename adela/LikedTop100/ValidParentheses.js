/**
 * @param {string} s
 * @return {boolean}
 */

const pair = { ')': '(', '}': '{', ']': '[' };

 var isValid = function(s) {
    // s
    let result = []
    const pairKeys = Object.keys(pair);
    // s를 돌면서 pairKeys
    for(let str of s){
      if(!pair[str]){
        result.push(str)
      }else if(result.pop() !== pair[str]){
        return false;
      }
    }
    return result.length===0
};