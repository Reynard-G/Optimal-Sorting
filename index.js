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
	sortlist(arr)
    } else arr.push(line)
})
    
/*
fs.readFile('text.txt', function(err, data) {
    if(err) throw err;
    arr = data.toString().split("\n");
    sortlist(arr)
});
*/

function swap(list, i, j) {
    [list[i], list[j]] = [list[j], list[i]];
    return list;
}

function sortlist(unsorted) {
    var count = unsorted.length;
    
    for (var i = 0; i < unsorted.length; i++) {
	for (var j = i + 1; j < count; j++) {
	    if (unsorted[i] > unsorted[j]) {
		swap(unsorted, i, j);
	    }
	}
	count -= 1
	console.log(unsorted[i])
    }
}
