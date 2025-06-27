import React, { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import Modal from "../components/ui/Modal.jsx";
import {useNavigate} from "react-router-dom";



const url = "https://jsonplaceholder.typicode.com/todos";
const TodoListApp = () => {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")


  const [openModal, setOpenModal] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [deletedTodoName, setDeletedTodoName] = useState("");
  const [todoToDeleteId, setTodoDeleteId] = useState(null);

  const [todoData, setTodoData] = useState({
    id: null,
    todoName: "",
    desc: "",
    completed: false,
  });

  const navigate = useNavigate();


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

    }

    setTodoData({
      todoName: "",
      desc: "",
      completed: false,
    });
  };

  //red button -- opens the modal
  const handleDeleteTodo = (id) => {
    setTodoDeleteId(id)
    setOpenModal(true);
    // setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  //Amber button -- deletes the todo item
  const handleDelete = () => {
    const todoToBeDeleted = todos.find(todo => todo.id === todoToDeleteId);
    setDeletedTodoName(todoToBeDeleted.todoName);
    setTodos((prevTodos) =>
        prevTodos.filter((todo) => todo.id !== todoToDeleteId)
    );

    setOpenModal(false);


    //navigate to /users
    navigate(`/users`);
    // setIsSuccessModalOpen(true)
  }

  const handleUpdate = (id) => {
    setIsEditing(true);
    const todoToUpdate = todos.find((todo) => todo.id === id);

    setTodoData({
      id: todoToUpdate.id,
      todoName: todoToUpdate.todoName,
      desc: todoToUpdate.desc,
      completed: todoToUpdate.completed,
    });

    setOpenModal(false);
  };


  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
    setDeletedTodoName("");
  }



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


              <Modal show={openModal} modalClosed={() => setOpenModal(false)}>
                <p className="text-center text-amber-800 text-3xl uppercase">Confirm Delete</p>

                <p className="text-center text-gray-700 mt-2">Are you sure you want to delete:
                  <span className="font-semibold">{deletedTodoName}</span>
                </p>
                <div className="flex justify-between mt-4">
                  <button className="bg-blue-400 px-4 py-2 rounded-xl"  onClick={() => setOpenModal(false)}>Cancel</button>
                  <button className="bg-amber-800 px-4 py-2 rounded-xl"  onClick={handleDelete}>Delete</button>
                </div>
              </Modal>

              <Modal show={isSuccessModalOpen} modalClosed={closeSuccessModal}>
                <p className="text-center text-green-600 text-3xl uppercase">
                  Success!
                </p>
                <p className="text-center text-gray-700 mt-2">
                  Successfully deleted item:{" "}
                  <span className="font-semibold">{deletedTodoName}</span>.
                </p>
                <div className="flex justify-center mt-6">
                  <button
                      className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-xl text-white font-medium transition duration-200"
                      onClick={closeSuccessModal}
                  >
                    Close
                  </button>
                </div>

              </Modal>


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