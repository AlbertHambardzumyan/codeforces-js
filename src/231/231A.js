/**
 * @author Albert Hambardzumyan
 * @description Team.
 *  Reference: http://codeforces.com/problemset/problem/231/A
 *  Tags: brute force, greedy, 800
 */
(function () {
  const iterations = readline()

  var result = 0
  for (var i = 0; i < iterations; i++) {
    var input = readline().split(' ')
    var first = parseInt(input[0])
    var second = parseInt(input[1])
    var third = parseInt(input[2])

    if ((first === 1 && second === 1) || (second === 1 && third === 1) || (first === 1 && third === 1))
      result++
  }

  print(result)
})()

