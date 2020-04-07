/**
 * @author Albert Hambardzumyan
 * @description Next Round.
 *  Reference: http://codeforces.com/problemset/problem/158/A
 *  Tags: special problem, implementation, 1800
 */
(function () {
  const input = readline().split(' ')
  const place = input[1]

  const points = readline().split(' ')

  var result = 0
  var temp = points[place - 1]

  points.forEach((item) => {
    if (parseInt(item) !== 0 && parseInt(item) >= temp)
      result++
  })

  print(result)
})()
