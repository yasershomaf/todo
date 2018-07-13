const {promisify} = require('util');
var uniqid = require('uniqid');
const {readFile} = require('fs');
const readFileAsync = promisify(readFile);
let newTodo;
module.exports = () => readFileAsync('./todos.json');