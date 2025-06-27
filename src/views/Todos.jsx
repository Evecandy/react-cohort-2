import {useState, useEffect} from "react";
import {Outlet} from "react-router-dom";
import TodosNav from "../navbar/TodosNav.jsx";

const url = "https://jsonplaceholder.typicode.com/todos";
export default function Todos() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

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

                console.log(todos);

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
        <div className="flex flex-col justify-center items-center ">
            <h1 className="text-3xl font-bold">Todos Page</h1>

            <TodosNav />

            <div className="bg-amber-800 p-10 mb-4" >
                <p>Hello World</p>

            </div>

            <div className="bg-amber-300 p-10" >
                <p>Hello Devs </p>
                <Outlet/>
                <p>After Children routes were rendered</p>
            </div>

            {isLoading ? (
                <p className="text-center text-gray-500">Loading...</p>
            ) : (
                <div className="w-full max-w-4xl mx-auto p-4">
                </div>
            )}

            { error && <p className="text-center text-red-500">{error}</p>}
        </div>
    );
}