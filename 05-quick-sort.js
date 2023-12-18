const array = [0, 3, 2, 5, 6, 8, 9, 3, 4, 6, 8, 12, 11, -5, -3, -1, 5, 2, 4, -4, 7]
let count = 0;

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let pivotIndex = Math.floor(array.length / 2)
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (i === pivotIndex) {
            continue
        }
        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(array)) // O(log2n * n)
console.log(array.length) // 21
console.log("count:", count) // 99
