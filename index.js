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
	splitSort(arr).forEach(function (element) {
	    console.log(element)
	});
    } else arr.push(line)
})
*/

fs.readFile('text.txt', function(err, data) {
    if(err) throw err;
    arr = data.toString().split("\n");
    for (let element of splitSort(arr)) {
        console.log(element)
    }
});

function combine(left, right) {
    let data = []

    while (left.length && right.length) {
	if (left[0] < right[0]) {
	    data.push(left.shift())
	} else {
	    data.push(right.shift())
	}
    }
    return [...data, ...left, ...right]
}

function splitSort(array) {
    const split = array.length / 2

    if (array.length < 2) {
	return array
    }
    
    const left = array.splice(0, split)
    return combine(splitSort(left), splitSort(array))
}
