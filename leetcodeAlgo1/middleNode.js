/**
 * Description: Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const middleNode = (head) => {
  let fastPointer = head;
  let slowPointer = head;
  while (fastPointer !== null && fastPointer.next) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }
  return slowPointer;
};

console.log(middleNode([1, 2, 3, 4, 5]));
console.log(middleNode([1, 2, 3, 4, 5, 6]));
// Output: [3,4,5]
