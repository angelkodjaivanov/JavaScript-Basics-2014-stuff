function printNumbers(n) {
    var result = [];
    for (var i = 1; i <= n; i++) {
        if ((i %4 == 0) || (i %5 == 0)) {
            continue;
        } else {
            result.push(i);
        }
    }
    result.join(",");
    if (n < 1) {
        return "no";
    } else {
        return result;
    }
}
		console.log(printNumbers(20));
		console.log(printNumbers(-5));
		console.log(printNumbers(13));