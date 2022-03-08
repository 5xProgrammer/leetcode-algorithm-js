/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * You are given two non-empty linked lists representing two non-negative integers.
 *  The digits are stored in reverse order, and each of their nodes contains a single digit.
 *  Add the two numbers and return the sum as a linked list.
 *  You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head_l1 = l1;
  let head_l2 = l2;
  let answer_head = new ListNode(0);
  let node = answer_head;
  let value = 0,
    carryOver = 0,
    tempSum = 0,
    l1_value = 0,
    l2_value = 0;
  let isTwoDigitNumber = false;

  function isTwoDigitNum(num) {
    return Math.floor(num / 10) >= 1;
  }
  while (head_l1 || head_l2) {
    l1_value = (head_l1 && head_l1.val) || 0;
    l2_value = (head_l2 && head_l2.val) || 0;

    tempSum = l1_value + l2_value + carryOver;
    isTwoDigitNumber = isTwoDigitNum(tempSum);
    value = isTwoDigitNumber
      ? Number(tempSum % 10)
      : tempSum;
    carryOver = isTwoDigitNumber
      ? Math.floor(tempSum / 10)
      : 0;
    node.next = new ListNode(value);
    node = node.next;
    if (head_l1) head_l1 = head_l1.next;
    if (head_l2) head_l2 = head_l2.next;
  }
  if (carryOver > 0) node.next = new ListNode(carryOver);

  return answer_head.next;
};
