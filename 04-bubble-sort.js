const array = [0, 3, 2, 5, 6, 8, 9, 3, 4, 6, 8, 12, 11, -5, -3, -1, 5, 2, 4, -4, 7]
let count = 0;

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let tmp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tmp
            }
            count += 1
        }
    }
    return array
}

console.log(bubbleSort(array)) // O(n^2) -->  21 x 21 = 441
console.log(array.length) // 21
console.log("count:", count) // 441

