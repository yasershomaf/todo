const {promisify} = require('util');
const {readFile, writeFile} = require('fs');
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);
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
        todos.splice(index, 1);
        return writeFileAsync('./todos.json', JSON.stringify(todos))
    }
});