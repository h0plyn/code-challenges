// For an integer k rearrange all the elements of the given array in such way, that:
// all elements that are less than k are placed before elements that are not less than k;
// all elements that are less than k remain in the same order with respect to each other;
// all elements that are not less than k remain in the same order with respect to each other.

function splitByValue(k, elements) {
    return elements.filter(el => el < k).concat(elements.filter(el => el >= k))
}
