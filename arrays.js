var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var array = [1]
var element = 'foo'

function addElementToBeginningOfArray(array, element) {
  array = [element, ...array]
  return array
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
    array = [array, ...element]
    return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
array = [1, 2, 3]

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop()
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
function accesElementInArray(array[element]) {
  return array[element]
}
