const assert = require("assert");
const input = require("fs")
  .readFileSync(
    require("path").resolve(__dirname, "input.txt")
  )
  .toString()
  .split("\n");
const [n, c] = input[0].split(" ").map(Number);
const x = input.slice(1).map(Number);

function isPossible(d) {
  //모든 집의 좌표를 iterate하면서 d거리 를 수용할 수 있는 범위의 집
  let lastPoint = x[0];
  let cnt = 1;
  let diff = 0;

  for (let i = 1; i < x.length; i++) {
    diff = x[i] - lastPoint;
    if (diff >= d) {
      cnt++;
      lastPoint = x[i];
    }
  }
  return cnt >= c; // cnt: d 거리를 수용할 수 잇는 범위의 집을 count한 숫자,

}

function solution(n, c, x) {
  let answer = 0;
  let l = 0,
    r = 100; //최대 거리
  let mid = 0;
  //sort
  x = x.sort();
  while (l <= r) {
    mid = parseInt((l + r) / 2);
    //mid 거리에 있으면 공유기를 n개설치 할 수 있나?
    if (isPossible(mid)) {
      //d 거리에 공유기 n개 설치 가능하다면?
      answer = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return answer;
}
assert.equal(solution(n, c, x), 3);
