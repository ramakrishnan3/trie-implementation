var Trie = require("../../trie-ing");
var input = require("./million");
var output = require("../million_trie");
var fs = require('fs');

if (!output.root) {
    console.log("from scratch start: ", new Date());
    var trie = new Trie({maxWidth: 50});
    input.forEach((item, i) => {
        trie.add({
            key: item.value.name,
            value: {name: item.value.name},
            score: item.score
        });
    });
    console.log("from scratch end: ", new Date());

} else {
    console.log("from json start: ", new Date());
    var trie = new Trie(output);
    console.log("from json end: ", new Date());
}


fs.writeFile('million_trie.js', `const output = ${JSON.stringify(trie)}; module.exports = output;`, function (err) {
    if (err) throw err;
    console.log('It\'s saved!', new Date());
});


// trie.root.getSortedResults("notneeded", results, opts, new PQueue(opts.limit));



console.log(trie.prefixSearch('f', {limit: 3, unique: true})); 
console.log(trie.prefixSearch('fa', {limit: 3, unique: true}));