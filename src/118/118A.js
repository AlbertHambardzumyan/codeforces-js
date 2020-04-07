/**
 * @author Albert Hambardzumyan
 * @description String Task.
 *  Reference: http://codeforces.com/problemset/problem/118/A
 *  Tags: implementation, strings, 1100
 */
(function () {
  const input = readline().toLowerCase()

  var result = ''
  var temp
  for (var i = 0; i < input.length; i++) {
    temp = input.charAt(i)
    if (!(temp === 'a' || temp === 'o' || temp === 'y' || temp === 'e' || temp === 'u' || temp === 'i'))
      result += '.' + temp
  }

  print(result)
})()
