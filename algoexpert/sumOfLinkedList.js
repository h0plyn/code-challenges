class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Brute Force
// O(m+n)t | O(m+n)s - where m is the length of LL one and n is the length of LL two
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let sumOne = [];
  let sumTwo = [];

  let currNodeOne = linkedListOne;
  let currNodeTwo = linkedListTwo;

  while (currNodeOne || currNodeTwo) {
    if (currNodeOne) {
      sumOne.push(currNodeOne.value);
      currNodeOne = currNodeOne.next;
    }

    if (currNodeTwo) {
      sumTwo.push(currNodeTwo.value);
      currNodeTwo = currNodeTwo.next;
    }
  }

  const joinedOne = sumOne
    .map((el) => String(el))
    .reverse()
    .join('');
  const joinedTwo = sumTwo
    .map((el) => String(el))
    .reverse()
    .join('');

  let sum = parseInt(joinedOne) + parseInt(joinedTwo);

  let list = String(sum)
    .split('')
    .reverse()
    .map((el) => Number(el));

  let summedLinkedList = new LinkedList(list[0]);
  let currNode = summedLinkedList;
  for (let node = 1; node < list.length; node++) {
    currNode.next = new LinkedList(list[node]);
    currNode = currNode.next;
  }

  return summedLinkedList;
}
