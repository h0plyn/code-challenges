class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n + m)t | O(1)s - where n and m are the length of the input Linked Lists
function mergeLinkedLists(headOne, headTwo) {
  let p1 = headOne;
  let p1Prev = null;
  let p2 = headTwo;

  while (p1 !== null && p2 !== null) {
    if (p1.value < p2.value) {
      p1Prev = p1; // If smaller, store p1 in p1Prev
      p1 = p1.next; // Traverse p1
    } else {
      if (p1Prev !== null) p1Prev.next = p2; // Point the ordered list at the next largest number
      p1Prev = p2; // Store p2 so we don't lose the pointer
      p2 = p2.next; // Traverse p2 to next node
      p1Prev.next = p1; // Smaller number points to larger number
    }
  }
  if (p1 === null) p1Prev.next = p2; // Append p2 to the end of p1
  return headOne.value < headTwo.value ? headOne : headTwo; // Return the LL that started with smallest val
}
