var readline = require('readline');
var fs = require('fs');
var arr = [];

/*
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line){
    if(line.replace(/\n/, "").length == 0) {
	rl.close();
	sortlist(data)
    } else data.push(line)
})
*/

fs.readFile('text.txt', function(err, data) {
    if(err) throw err;
    arr = data.toString().split("\n");
    sortlist(arr)
});

function swap(list, i, j) {
    [list[i], list[j]] = [list[j], list[i]];
    return list;
}

function sortlist(unsorted) {
    for (var i = 0; i < unsorted.length; i++) {
	for (var j = i + 1; j < unsorted.length; j++) {
	    if (unsorted[i] > unsorted[j]) {
		swap(unsorted, i, j);
	    }
	}
	console.log(unsorted[i])
    }
}
