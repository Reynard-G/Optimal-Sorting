var readline = require('readline');
var fs = require('fs');
const { exec } = require("child_process");
var arr = [];

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line){
    if(line.replace(/\n/, "").length == 0) {
	rl.close();
    } else arr.push(line)
});

rl.on('close', function(line) {
    splitSort(arr).forEach(function (element) {
	console.log(element)
    });
    /*
    arr.sort().forEach(function (element) {
	console.log(element)
    });
    */
});

/*
exec("cat /usr/share/dict/words | shuf", (error, stdout) => {
    if (error !== null) {
	console.log(`exec error: ${error}`)
    }
    arr = stdout.toString().split("\n");
    // Sorting using own algorithm
    for (let element of splitSort(arr)) {
	console.log(element)
    }
    // Sorting using built-in algorithm
//    for (let element of arr.sort()) {
//	console.log(element)
//    }
});
*/

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
