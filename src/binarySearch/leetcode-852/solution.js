const assert = require("assert");
const peakIndexInMountainArray = function (arr) {
  let answer = -1;
  let l = 1;
  r = arr.length - 1;
  while (l <= r) {
    let mid = parseInt((l + r) / 2);
    //최고 지점인지 확인
    if (
      arr[mid - 1] <= arr[mid] &&
      arr[mid + 1] < arr[mid]
    ) {
      return mid;
    } else if (
      arr[mid - 1] < arr[mid] &&
      arr[mid + 1] > arr[mid]
    ) {
      // 올라가는 지점
      l = mid + 1;
    } else if (
      arr[mid - 1] > arr[mid] &&
      arr[mid + 1] < arr[mid]
    ) {
      // 내려가는 지점인지
      r = mid - 1;
    }
  }
  return answer;
};

//decision problem approach

const _peakIndexInMountainArray = (arr) => {
  function isTrueZone(mid) {
    //true zone - decrease zone
    //lowest mid
    return arr[mid] > arr[mid + 1];
  }

  let l = 1,
    r = arr.length - 1;
  let mid = 0;
  while (l <= r) {
    mid = parseInt((l + r) / 2);
    if (isTrueZone(mid)) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
    return l;
  }
};

assert.deepEqual(
  peakIndexInMountainArray([0, 10, 5, 2]),
  1
);
assert.deepEqual(peakIndexInMountainArray([0, 2, 1, 0]), 1);
assert.deepEqual(peakIndexInMountainArray([0, 1, 0]), 1);
