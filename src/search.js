var Trie = require("../../trie-ing");
var input = require("./sample");
const { v4: uuidv4 } = require('uuid');
var fs = require('fs');

var trie = new Trie({maxWidth: 50});
console.log("before length: ", new Date());
console.log("length:", input.length);
console.log("after length: ", new Date());
input.reverse().forEach((item, i) => {
    // console.log(JSON.stringify(item));
    trie.add({
        id: uuidv4(),
        key: item.value.name,
        value: {name: item.value.name},
        score: item.score
    });
});
console.log("before search: ", new Date());

// trie.root.sort();

/* fs.writeFile('sample_trie.js',JSON.stringify(trie), function (err) {
    if (err) throw err;
    console.log('It\'s saved!', new Date());
  }); */


var results = [];
var opts = {unique: true, limit:  input.length};

console.log("before sorting: ", new Date());


// trie.root.getSortedResults("notneeded", results, opts, new PQueue(opts.limit));

console.log("after sorting: ", new Date());




console.log("before 1 search: ", new Date());
console.log(trie.prefixSearch('f', {limit: 3, unique: true})); 
console.log("before 2 search: ", new Date());
console.log(trie.prefixSearch('f', {limit: 3, unique: true})); 
console.log("after search: ", new Date());