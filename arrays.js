var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray([], element) {
  [...element, []]
}
function destructivelyAddElementToBeginningOfArray([], element) {
  []unshift(element)
}
