function solution(a, window_size) {
  const averages = []
  for (let i = 0; i < a.length - window_size + 1; i++) {
    let window_sum = 0
    for (let j = 0; j < window_size; j++) {
      window_sum += a[i + j]
    }
    const window_avg = window_sum / window_size
    averages.push(window_avg)
  }
  return averages
}

console.log(solution([20, 64, 73, 58, 74], 4))
console.log(solution([20, 64, 73, 58, 74], 2))
