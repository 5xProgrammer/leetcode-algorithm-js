// https://leetcode.com/problems/add-two-numbers/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next){
  this.val = val===undefined ? 0 : null;
  this.next = next===undefined ? null : next;
}

 var addTwoNumbers = function(l1, l2) {
    let resultArr = []
    let node = new ListNode(); // node; {val:0, next:null}
    console.log('log ============> ', node)
    if(node.next){resultArr.push(node.next)}

    return resultArr
};

addTwoNumbers(1,2)
// ????