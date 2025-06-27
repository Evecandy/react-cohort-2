import React from "react"
import TodoItem from "./TodoItem.jsx"

const TodoCategory = ({ title, todos, handleUpdate, handleDeleteTodo, titleColor }) => {

    return (
        <div className="mb-8">
            <h2 className={`text-2xl font-bold mb-4 ${titleColor || 'text-gray-800'}`}>
                {title}
            </h2>
            <div className="space-y-4">
                {todos.length === 0 ? (
                    <p className="text-gray-500 italic">No tasks in this category.</p>
                ) : (
                    todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            handleUpdate={handleUpdate}
                            handleDeleteTodo={handleDeleteTodo}
                        />
                    ))
                )}
            </div>
        </div>
    )


}

export default TodoCategory;