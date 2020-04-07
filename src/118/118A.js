/**
 * @author Albert Hambardzumyan
 * @description String Task.
 *  Reference: http://codeforces.com/problemset/problem/118/A
 *  Tags: implementation, strings, 1100
 */
(function () {
  const input = readline().toLowerCase()

  var result = ''
  for (var i = 0; i < input.length; i++) {
    var temp = input.charAt(i)
    if (!(temp === 'a' || temp === 'o' || temp === 'y' || temp === 'e' || temp === 'u' || temp === 'i'))
      result += '.' + temp
  }

  print(result)
})()
