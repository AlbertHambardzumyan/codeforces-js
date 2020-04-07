/**
 * @author Albert Hambardzumyan
 * @description Way Too Long Words.
 *  Reference: http://codeforces.com/problemset/problem/71/A
 *  Tags: strings, 800
 */
(function () {
  const iterations = parseInt(readline())

  for (var i = 0; i < iterations; i++) {
    var input = readline()
    var length = input.length

    var result = length <= 10
      ? input
      : input.substring(0, 1) + (length - 2) + input.substring(length - 1, length)

    print(result)
  }
})()
