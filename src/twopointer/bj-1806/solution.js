const assert = require("assert");
const inputs = require("fs")
  .readFileSync(
    require("path").resolve(__dirname, "input.txt")
  )
  .toString()
  .split("\n");
const [n, s] = inputs[0];
const arr = inputs[1].split(" ").map(Number);

const solution = (n, s, arr) => {
  let r = 0,
    sum = 0,
    ans = n + 1;
  //l을 1부터 10까지
  for (let l = 0; l <= n; l++) {
    //R을 옮길 수 있을 때까지 옮기기
    while (r + 1 <= n && sum < s) {
      r++; //r을 옮겨주고
      sum += arr[r]; // 옮길 r+ sum
      // sum 이 s 보다 큰지 확인하고,
      if (sum >= s) {
        //만약 크다면
        // left, right까지의 원소 길이를 확인해서 , 여태 구한 길이보다 작은 것을 찾는다.
        Math.min(right - left + 1, ans);
      }
    } //r을 옮길 수 있는 조건 : sum이 s보다 작아야함  r+1 이 arr.length를  넘지 않아야한다.
    sum -= arr[l - 1];
    if (ans === n + 1) return 0;
  }
  return ans;
};

assert.deepEqual(solution(n, s, arr), 2);
