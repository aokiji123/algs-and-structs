const array = [0, 3, 2, 5, 6, 8, 9, 3, 4, 6, 8, 12, 11, -5, -3, -1, 5, 2, 4, -4, 7] // [0, 1, 1, 2...]
let count = 0

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j
            }
            count += 1
        }
        let tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
    }
    return array
}

console.log(selectionSort(array)) // O(n^2) --> O(1/2n^2)
console.log(array.length) // 21
console.log("count:", count) // 210
// don't include coefficient (1/2) during calculation of algorithm speed
