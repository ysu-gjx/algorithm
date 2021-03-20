/**
 * Dummy Node in Linked List  // 当头不确定的时候就用Dummy Node
 * 
 * 
 * remove-duplicates-from-sorted-list
 * remove-duplicates-from-sorted-list-ii
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
   if (head === null || head.next === null) {
    return head
   }
   let node = head
   while (node.next !== null) {
     if (node.val === node.next.val) {
      node.next = node.next.next
     } else {
       node = node.next
     }
   }
   return head
};


