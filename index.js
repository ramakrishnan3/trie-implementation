var Trie = require("../trie-ing");
var readline = require('readline');
var fs = require('fs');
var input = require("./sample/sample"); // input file is mandatory
try {
    var output = require("./sample/sample_trie");
} catch (e){
    var output = undefined;
}

// Decide on building a trie from the data or loading it from already built trie data structure form file

if ((!output || !output.root) || process.argv[2]) {
    const start = new Date();
    var trie = new Trie({maxWidth: 50});
    input.forEach(item => {
        item.value.name.split("_").forEach(key => {
            trie.add({
                key: key,
                value: {name: item.value.name},
                score: item.score
            });
        })
    });
    // write the built trie to a file
    fs.writeFile('./sample/sample_trie.js', `const output = ${JSON.stringify(trie)}; module.exports = output;`, function (err) {
        if (err) throw err;
    });
    const end = new Date();
    console.log(`From Scratch, Time Taken: ${end - start}ms`);

} else {
    const start = new Date();
    var trie = new Trie(output);
    const end = new Date();
    console.log(`From Built Trie, Time Taken: ${end - start}ms`);
}

var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('Enter Prefix> ');

rl.prompt();
rl.on('line', function(line) {
    if (line === "exit") rl.close();
    console.log(trie.prefixSearch(line, {limit: 10, unique: true})); // limit has to made 10
    rl.prompt();
}).on('close',function(){
    process.exit(0);
});
