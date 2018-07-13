const {promisify} = require('util');
const {readFile} = require('fs');
const readFileAsync = promisify(readFile);
module.exports = () => readFileAsync('./todos.json');