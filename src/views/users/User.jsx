import {useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import UserCard from "../../components/users/UserCard.jsx";
import MoreDetailedUserCard from "../../components/users/MoreDetailedUserCard.jsx";


const url = "https://jsonplaceholder.typicode.com/users";
export default function User({}) {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const {id} = useParams();
    // todo useSearchParams()

    useEffect(() =>{
        async function getData() {
            setIsLoading(true);
            try {
                const response = await fetch(`${url}/${id}`);
                console.log(response);

                if (!response.ok) {
                    setError("Failed To Fetch The data")
                    throw new Error(`Response status: ${response.status}`);
                }

                const json = await response.json();
                setUser(json)
                console.log("User: ", json);

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
        <div className="w-full">
            <h1 className="text-3xl font-bold text-center my-5">User Details</h1>
            {isLoading ? (
                <p className="text-center text-gray-500">Loading...</p>
            ) : (
                <div className="my-5 w-full">
                    <div className=" flex justify-center">
                        <MoreDetailedUserCard key={user.id} user={user} />
                    </div>
                </div>
            )}


            {error && <p className="text-center text-red-500">{error}</p>}
        </div>
    );
}