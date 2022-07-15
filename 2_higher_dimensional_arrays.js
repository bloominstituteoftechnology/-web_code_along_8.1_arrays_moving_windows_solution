function solution(arr, row, col) {
  return arr[row][col].reduce((acc, int) => acc + int)
}

// Example test case:

const arr = [
  [
    [1, 2, 3, 4, 0, 6],
    [7, 0, -9, 10, 11, 12],
    [0, 14, 15, 16, 17, 18]
  ],
  [
    [0, 1, 23, 17, 29, 13],
    [1, -2, 3, 4, 5, -6],
    [7, 0, 9, 8, 6, 1]
  ]
]

console.log(solution(arr, 1, 2))
