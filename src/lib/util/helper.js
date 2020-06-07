function getCounter(){
  let cnt = 0;
  return (() => cnt++);
}

function reverseIf(arr, bool) {
  if (bool) {
    return arr.reverse();
  }
  return arr;
}

module.exports = { getCounter, reverseIf };