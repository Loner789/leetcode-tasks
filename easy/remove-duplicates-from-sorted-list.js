// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

var deleteDuplicates = function (head) {
  let current = head;
  
  while (current) {
    current.val === current.next?.val
      ? (current.next = current.next.next)
      : (current = current.next);
  }

  return head;
};
