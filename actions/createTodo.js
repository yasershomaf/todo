const {promisify} = require('util');
var uniqid = require('uniqid');
const {readFile, writeFile} = require('fs');
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);
let newTodo;
module.exports = (todo) => readFileAsync('./todos.json').then(text => {
    const todos = JSON.parse(text);
    newTodo = {id: uniqid(), todo: todo, done: false};
    todos.push(newTodo);
    return writeFileAsync('./todos.json', JSON.stringify(todos))
}).then(() => newTodo);