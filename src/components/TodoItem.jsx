
const TodoItem = ({todo, handleUpdate, handleDeleteTodo}) => {


    return (
        <div className="bg-gray-100  my-3 p-3 rounded-lg flex  justify-between items-center shadow-sm">
            <div>
                <h1 className="text-lg">
                    <span className="font-semibold mr-2"> Name:</span> {todo.todoName}
                </h1>
                <h1 className="text-gray-600">
                    <span className="font-semibold mr-2" >Desc: </span> {todo.desc}</h1>
            </div>
            <div className="text-sm mt-1" >{todo.isComplete && "✅"}</div>

            <div className={"flex gap-2 items-center ml-4 "}>
                <button
                    className="p-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition-colors"
                    onClick={() => handleUpdate(todo.id)}
                >
                    Update
                </button>
                <button
                    className="p-2 bg-red-600 rounded-md text-white hover:bg-red-700 transition-colors"
                    onClick={() => handleDeleteTodo(todo.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TodoItem