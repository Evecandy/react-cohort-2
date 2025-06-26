import { useEffect, useState } from "react";
import TodoList from "../components/users/TodoList.jsx";
import TodoForm from "../components/users/TodoForm.jsx";


const url = "https://jsonplaceholder.typicode.com/todos";
const TodoListApp = () => {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const [todoData, setTodoData] = useState({
    id: null,
    todoName: "",
    desc: "",
    completed: false,
  });

  const handleInputChange = (event) => {
    setTodoData({
      ...todoData,
      [event.target.id]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (isEditing) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === todoData.id
            ? {
                ...todo,
                todoName: todoData.todoName,
                desc: todoData.desc,
                completed: todoData.completed,
              }
            : todo
        )
      );
      setIsEditing(false);
    } else {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          ...todoData,
          id: Math.floor(Math.random() * 1000),
        },
      ]);

      // try {
      //   const response = await fetch(url, {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(
      //       {
      //             ...todoData,
      //             id: Math.floor(Math.random() * 1000),
      //           },
      //     ),
      //   });
  
      //   if (response.ok) {
      //     toast.success("Message sent successfully! 🎉");
      //     reset();
      //   } else {
      //     const errorDetails = await response.json();
      //     toast.error("Failed to send message. Please try again.");
      //     console.error("Error sending email:", errorDetails.message);
      //   }
    }

    setTodoData({
      todoName: "",
      desc: "",
      completed: false,
    });
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleUpdate = (id) => {
    setIsEditing(true);
    const todoToUpdate = todos.find((todo) => todo.id === id);

    setTodoData({
      id: todoToUpdate.id,
      todoName: todoToUpdate.todoName,
      desc: todoToUpdate.desc,
      completed: todoToUpdate.completed,
    });
  };


  useEffect(() =>{
    async function getData() {

      setIsLoading(true);
      try {
        const response = await fetch(url);
        console.log(response);
        
        if (!response.ok) {
          setError("Failed To Fetch The data")
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
       
        
      setTodos(json.slice(0, 10).map(todo => ({
          id: todo.id,
          todoName: todo.title,
          desc: "No description available",
          completed: todo.completed,
        })));
        
        setIsLoading(false);
      } catch (error) {
        console.error(error.message);
      }finally{
        setIsLoading(false);
      }
    }
    
    getData();
  },[])
  


  return (
    <div>
      <h1 className="text-2xl text-gray-700 text-center font-bold">
        Todo List App
      </h1>

      <div className="my-5">
        <TodoForm
          todoData={todoData}
          isEditing={isEditing}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />
      </div>

      {isLoading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div>
          {/* div rendering our todo list items */}
          <TodoList
            myTodos={todos}
            handleDeleteTodo={handleDeleteTodo}
            handleUpdate={handleUpdate}
          />
        </div>
      )}

      {error && <p className="text-center text-red-500">{error}</p>}
    </div>
  );
};

export default TodoListApp;
