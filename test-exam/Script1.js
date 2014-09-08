// JavaScript sourc
function solve(input) {
    var start = Number(input[0]);
    var end = Number(input[1]);
    var numarr = [];
    var squarearr = [];
    var fib = [0, 1];
    for (var i = start; i < end; i++) {
        numarr[i] = i;
        squarearr[i] = i * 2;
        fib[i] = fib[i - 2] + fin[i - 1];
        if (fib === numarr[i]) {
            return "<tr><td>" + numarr + "</td><td>" + squarearr +"</td><td>yes</td></tr>";
        }
        else {
            return "<tr><td>" + numarr + "</td><td>" + squarearr + "</td><td>no</td></tr>";
        }
    }
  

}
console.log(solve(2, 6));