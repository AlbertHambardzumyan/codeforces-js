/**
 * @author Albert Hambardzumyan
 * @description Bit++.
 *  Reference: http://codeforces.com/problemset/problem/282/A
 *  Tags: implementation, 900
 */
(function () {
  const iterations = readline()

  var x = 0
  for (var i = 0; i < iterations; i++) {
    var temp = readline()

    temp.charAt(0) === '+' || temp.charAt(2) === '+' ? x++ : x--
  }

  print(x)
})()
