var Trie = require("../../trie-ing");
var input = require("./sample");
var output = require("../sample_trie");
var fs = require('fs');

if (!output.root) {
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
    const end = new Date();
    console.log(`From Scratch, Time Taken: ${end - start}ms`);

} else {
    const start = new Date();
    var trie = new Trie(output);
    const end = new Date();
    console.log(`From Buit Trie, Time Taken: ${end - start}ms`);
}


fs.writeFile('sample_trie.js', `const output = ${JSON.stringify(trie)}; module.exports = output;`, function (err) {
    if (err) throw err;
    console.log('It\'s saved!', new Date());
});


// trie.root.getSortedResults("notneeded", results, opts, new PQueue(opts.limit));



console.log(trie.prefixSearch('face', {limit: 3, unique: true})); 
console.log(trie.prefixSearch('hel', {limit: 3, unique: true}));