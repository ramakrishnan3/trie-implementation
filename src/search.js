var Trie = require("../../trie-ing");
var input = require("./million");
const { v4: uuidv4 } = require('uuid');/* 
import Trie from "../../trie-ing";
import input from "./sample";
import { v1 as uuidv1 } from 'uuid'; */

var trie = new Trie();
console.log("before length: ", new Date());
console.log("length:", input.length);
console.log("after length: ", new Date());
input.forEach((item, i) => {
    // console.log(JSON.stringify(item));
    trie.add({
        id: uuidv4(),
        key: item.value.name,
        value: {name: item.value.name},
        score: item.score
    });
});
console.log("before search: ", new Date());

console.log(trie.prefixSearch('f', {limit: 3, unique: true})); 
console.log("after search: ", new Date());
console.log(trie.prefixSearch('f', {limit: 3, unique: true})); 
console.log("after search: ", new Date());