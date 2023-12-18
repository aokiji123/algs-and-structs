const array = [1, 5, 3, 4, 7, 9, 10, 12, 2];
let count = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1
    if (array[i] === item) {
        return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 9)); // O(n)
console.log("count:", count)
