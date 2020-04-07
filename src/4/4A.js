/**
 * @author Albert Hambardzumyan
 * @description Watermelon.
 *  Reference: http://codeforces.com/problemset/problem/4/A
 *  Tags: brute force, math, 1200
 */
(function () {
  const weight = readline()

  const result = weight % 2 === 1 || weight <= 2 ? 'NO' : 'YES'

  print(result)
})()
