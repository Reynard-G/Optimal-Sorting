var readline = require('readline');
var fs = require('fs');
var arr = [];

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line){
    if(line.replace(/\n/, "").length == 0) {
	rl.close();
	sort(arr)
    } else arr.push(line)
})

/*
fs.readFile('text.txt', function(err, data) {
    if(err) throw err;
    arr = data.toString().split("\n");
    sort(arr)
});
*/

function sort(data) {
    let min;

    for (let i = 0; i < data.length; i++) {
	min = i;
	for (let j = i + 1; j < data.length; j++) {
	    if (data[j] < data[min]) {
		min = j;
	    }
	}
	if (min != i) {
	    [data[i], data[min]] = [data[min], data[i]];
	}
    }
    arr.forEach(function(element) {
	console.log(element)
    });
};
