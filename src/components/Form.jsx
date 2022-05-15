import React, { useEffect } from "react";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
 
  useEffect(() => {
    if(editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);


  const updateTodo = (title, id ) => {     
    const newTodo = todos.map((todo)=> todo.id === id ? {...todo, title} : todo);
    setTodos(newTodo);
    setEditTodo("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!editTodo){
      setTodos([...todos, { id: Math.random(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id);
      setInput("");
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form >
      <input
        value={input}
        onChange={handleChange}
        type="text"
        placeholder=" Ingredients"
        className="task-input"
      />
      <button onClick={handleSubmit} className="button-add">
        {editTodo ? "ok" : "ajouter"}
      </button>
    </form>
  );
};

export default Form;
