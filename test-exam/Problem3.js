// JavaScript source code
function solve(input) {
    var output = '';
    var a = '';
    for (var i in input) {
        a = a + input[i].toString();
    }
    if (a.indexOf("<a ") == -1) {
        return;
    }
    a = a.replace(/ /g, '');
    while (a.length > 0) {
        var index = a.indexOf("href=", a.indexOf("<a"));
        if (index == -1) {
            return;
        }
             
        var b = a.substring(index + 5).charAt(0);
        a = a.substring(index + 6);
        output = a.substring(0, a.indexOf(b));
        console.log(output);
       
    }
    
}
solve('<a href="http://softuni.bg" class="new"></a>');