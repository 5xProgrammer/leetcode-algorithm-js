const input = require("fs")
  .readFileSync(
    require("path").resolve(__dirname, "input.txt")
  )
  .toString()
  .split("\n");

const assert = require("assert");

// 이 블루레이가 얼마나 팔릴지 아직 알 수 없기 때문에, 블루레이의 개수를 가급적 줄이려고 한다
// M개의 블루레이에 모든 기타 강의 동영상을 녹화하기로 했다.
// 각 강의 의 순서를 바꿀 수 없다.
// 블루레이의 크기를 최소화하려고한다.모든 기타 강의 동영상을 녹화할 수 있는, 수용할수 있는 양에서 M개의 블루레이에
//총 강의 의 길이 10,000분
//mid = 10,000/2 일때,
// 1 2 3 4 5 6 7 8 9  - 강의 길이 : 1 !== 3, 1<3 즉 강의 길이가 너무 높다는 뜻 낮춰야 함.

// mid = 1+500/2  = 250

//mid = 1+250/2 = 125

//mid = 1+125 /2 = 63

//mid 63+1/2 = 32

//1 2 3 4 5 6 7 / 8+9  - 강의 길이 2 !==3 2<3 강의 길이가 높다 낮춰야하마

// mid 32+1 /2 ==16

//1+2+3+4+5 / 6+7 / 8 / 9  총 4개 그럼 강의 길이를 높여야 한다.

//
const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const solution = (n, m, arr) => {
  let l = Math.max(...arr); //*0 이 되어서는 안된다. 레슨의 길이가 자연수 이므로,
  let r = arr.reduce((acc, cur) => acc + cur, 0);

  function totalBlueray(num) {
    let cnt = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      //sum+현재값 이 num보다 커버리면 자르고 다음 그룹 .
      if (sum + arr[i] >= num) {
        sum = 0; //다음 그룹을 위해 0
        cnt += 1; // 그룹 추가
        sum += arr[i]; //마지막값 넣기
      } else {
        sum += arr[i];
      }
    }
    if (sum > 0) ++cnt;

    return cnt > m;
  }

  while (l < r) {
    let mid = parseInt((l + r) / 2);
    // 주어진 mid로 만들수 있는 blueray 수가 , 만들어야 할 blueray수보다 큰지

    if (totalBlueray(mid) >= m) {
      answer = mid;
      //m을 높여야 함
      l = mid - 1;
    } else {
      r = mid + 1;
    }
  }
  return mid;
};

console.log(solution(n, m, arr));
