const {promisify} = require('util');
const {readFile, writeFile} = require('fs');
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);
let updatedTodo;
module.exports = (id, todo) => readFileAsync('./todos.json').then(text => {
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
        updatedTodo = Object.assign({}, todos[index], {todo: todo});
        todos[index].todo = todo;
        return writeFileAsync('./todos.json', JSON.stringify(todos))
    }
}).then(() => updatedTodo);