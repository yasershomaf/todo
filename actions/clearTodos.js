const {promisify} = require('util');
const {writeFile} = require('fs');
const writeFileAsync = promisify(writeFile);
module.exports = () => writeFileAsync('./todos.json', '[]');