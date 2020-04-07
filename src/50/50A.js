/**
 * @author Albert Hambardzumyan
 * @description Domino piling.
 *  Reference: http://codeforces.com/problemset/problem/50/A
 *  Tags: greedy, math, 800
 */
(function () {
  const input = readline().split(' ')

  const m = input[0]
  const n = input[1]

  const result = Math.floor(m * n / 2)

  print(result)
})()
