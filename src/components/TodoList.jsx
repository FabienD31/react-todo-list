import React from "react";

const TodoList = ({ todos, setTodos, setEditTodo }) => {

  const handleDelete = (id) => {
    const todoListCopy = [...todos];
    const todoFiltered = todoListCopy.filter((ing) => ing.id !== id);
    setTodos(todoFiltered);
  };

  const handleCheck = (id) => {
      const todoCheck = todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }
    )
    setTodos(todoCheck);
  };
  const handleEdit = (id) => {
    const todoEdit = todos.filter((todo) => todo.id === id)[0];
    setEditTodo(todoEdit)};

  return (
    <div>
      {todos.map((todo) =>  (
        <li className="list-item" key={todo.id}>
          <p className={`list ${todo.completed ? "complete" : ""}`}>
             {todo.title}
          </p>
          <div>
            <button className="button-check" onClick={() => handleCheck(todo.id)}>Check</button>
            <button className="button-delete" onClick={() => handleDelete(todo.id)}>X</button>
            <button className="button-edit" onClick={()=>handleEdit(todo.id)}>Edit</button>
          </div>
        </li>
      ))}

    </div>
  );
};
export default TodoList;
