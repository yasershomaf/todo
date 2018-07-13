const {promisify} = require('util');
const {readFile} = require('fs');
const readFileAsync = promisify(readFile);
let todo;
module.exports = (id) => readFileAsync('./todos.json').then(text => {
    const todos = JSON.parse(text);
    let index = todos.length;
    for (let i=0; i<todos.length; i++) {
        if (todos[i].id === id) {
            index = i;
            break;
        }
    }
    if (index === todos.length) {
        throw(`The item with the id "${id}" was not found in the todo-list`);
    }
    else {
        todo = Object.assign({}, todos[index]);
    }
}).then(() => todo);