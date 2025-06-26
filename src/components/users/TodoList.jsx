import React from "react";

import TodoCategory from "./TodoCategory.jsx";

const TodoList = ({ myTodos, handleDeleteTodo, handleUpdate}) => {
  const completedTodos = myTodos.filter((todo) => todo.completed);
  const inProgressTodos = myTodos.filter((todo) => !todo.completed);

  return (
      <div className="container flex gap-4 mx-auto p-4">
        <TodoCategory
            title={"In Progress To-Dos"}
            todos={inProgressTodos}
            handleUpdate={handleUpdate}
            handleDeleteTodo={handleDeleteTodo}
            titleColor="text-gray-700"
        />
        <TodoCategory
            title={"Completed To-Dos"}
            todos={completedTodos}
            handleUpdate={handleUpdate}
            handleDeleteTodo={handleDeleteTodo}
            titleColor="text-amber-700"
        />
      </div>
  );
};

export default TodoList;