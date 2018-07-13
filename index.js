'use strict';
const Express = require('express');
const {
    createTodo,
    clearTodos,
    deleteTodo,
    readTodos,
    readTodo,
    updateTodo,
} = require('./actions');
const PORT = 3000;
const app = Express();
app.use(Express.json());

// createTodo
app.post('/todos', (req, res, next) => {
    const {todo} = req.body;
    createTodo(todo).then(
        data => res.send(data)
    ).catch(error => next(error));
});

// readTodos
app.get('/todos', (req, res, next) => {
    readTodos().then(
        data => res.send(data)
    ).catch(error => next(error));
});

// readTodo
app.get('/todos/:id', (req, res, next) => {
    const {id} = req.params;
    readTodo(id).then(
        data => res.send(data)
    ).catch(error => next(error));
});

// updateTodo, markAsDone and markAsNotDone
app.put('/todos/:id', (req, res, next) => {
    const {id} = req.params;
    updateTodo(id, req.body).then(
        data => res.send(data)
    ).catch(error => next(error));
});

// clearTodos
app.delete('/todos', (req, res, next) => {
    clearTodos().then(() => res.send(
        'The contents of the todo-list have been successfully emptied'
    )).catch(error => next(error));
});

// deleteTodo
app.delete('/todos/:id', (req, res, next) => {
    const {id} = req.params;
    deleteTodo(id).then(() => res.send(
        `The item with the id "${id}" was successfully deleted from the todo-list`
    )).catch(error => next(error));
});

// error handling
app.use((error, req, res, next) => {
  res.status(500).send({ error });
});

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));