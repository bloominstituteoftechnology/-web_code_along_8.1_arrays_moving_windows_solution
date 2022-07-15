function solution(size) {
  const arr = []
  for (let i = 0; i < size; i++) {
    arr.push(new Array(size).fill(0))
    arr[i][i] = 1
  }
  return arr
}
