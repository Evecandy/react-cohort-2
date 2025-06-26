

const TodoForm = ({ todoData, handleInputChange, handleFormSubmit, isEditing }) => {
  return (
    <div>
      <form
        action=""
        className="border border-gray-500 rounded-md p-5 flex flex-col gap-4"
        // onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          className="border border-gray-300 p-1.5 rounded-md "
          placeholder="Enter todo"
          id="todoName"
          value={todoData.todoName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="border border-gray-300 p-1.5 rounded-md "
          placeholder="Enter description"
          id="desc"
          value={todoData.desc}
          onChange={handleInputChange}
        />
        <div className="flex gap-3 items-center">
          <input
            type="checkbox"
            className="border border-gray-300 p-1.5 rounded-md "
            placeholder="Enter description"
            id="completed"
            value={todoData.completed}
            onChange={handleInputChange}
          />
          <label htmlFor="">Completed</label>
        </div>

        <button
          type="submit"
          className="p-1.5 rounded-md bg-gray-800 text-white"
          onClick={handleFormSubmit}
        >
          {isEditing ? "Update Todo" : "Add Todo"}
        </button>
      </form>
    </div>
  );
};

export default TodoForm