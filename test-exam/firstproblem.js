// JavaScript sourc
function solve(input) {
    var start = Number(input[0]);
    var end = Number(input[1]);
    var output = new Array(end);
    var s;
    function isPerfectSquare(x) {
        var s = Math.round(Math.sqrt(x));
        return ((s * s) === x);
    }
    function isfibonachi(n) {
        var a = (isPerfectSquare(5 * n * n + 4));
        var b = (isPerfectSquare(5 * n * n - 4));
        return a || b;
    }
    for (var i = start; i <= end; i++) {
      
            if (isfibonachi(i)) {
                output[i] = '<tr><td>' + i + '</td><td>' + (i * i) + '</td><td>yes</td></tr>';
            }
            else {
                output[i] = '<tr><td>' + i + '</td><td>' + (i * i) + '</td><td>no</td></tr>';
            }
        }
   
    output.splice(0, start);
        output.unshift('<table>\n<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');
        output.push('</table>');


        console.log(output.join('\n'));

    
}
solve([55,56])