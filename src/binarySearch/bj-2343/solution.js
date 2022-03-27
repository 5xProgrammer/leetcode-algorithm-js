

const inputs = require('fs').readFileSync(require('path').resolve(__dirname, 'input.txt')).toString().split("\n");
const [n,m] = inputs[0].split(" ").map(Number);
const arr = inputs[1].split(" ").map(Number)

/**
 * 
 * @param {number} n 강의수 
 * @param {number} m  블루레이 수
 * @param {array} arr 각 강의 시간을 나열한 배열 
 * 
 * 가능한 블루레이의 크기 중 최소를 구하는 프로그램 작성.
 */


function isPossible(length){
    //주어진 length에 
    let sum = 0;
    let cnt = 0;
    for(let i =0; i<arr; i++){
        if(sum+arr[i] >=length){
            sum = 0
            ++cnt;
            sum = arr[i]
            
        }else{
            sum+=arr[i]
        }
    }
    if(sum>=length) ++cnt;

    return cnt<=m; // cnt가 m보다 작다  
}
const solution = (n,m,arr)=>{
    
    let l = Math.max(...arr), r =arr.reduce((cur, arr)=>curr+arr);
    let mid;

    while(l<=r){
        mid = parseInt((l+r)/2);
        if(isPossible(mid)){
            answer = mid; 
            l =mid+1;  //늘리되  최소이므로 앞쪽에서 찾아야 함.

         }else{
            r = mid-1;
         }
    }
    return answer;
}


solution(n,m,arr);