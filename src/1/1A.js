/**
 * @author Albert Hambardzumyan
 * @description Theatre Square.
 *  Reference: http://codeforces.com/problemset/problem/1/A
 *  Tags: math, 1300
 */
(function () {
  const input = readline().split(' ')

  const m = input[0]
  const n = input[1]
  const a = input[2]

  const height = m % a === 0 ? Math.floor(m / a) : Math.floor(m / a) + 1
  const width = n % a === 0 ? Math.floor(n / a) : Math.floor(n / a) + 1

  const result = height * width

  print(result)
})()

