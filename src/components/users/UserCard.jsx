import {Link} from "react-router-dom";

export default function UserCard({ user }) {
    return (
        <div className="border p-4 rounded shadow bg-white">
            <Link to={`${user.id}`}>
                <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                <p className="text-gray-600">Email: {user.email}</p>
                <p className="text-gray-600">Phone: {user.phone}</p>
                <p className="text-gray-600">Website: {user.website}</p>
                <p className="text-gray-600">Company: {user.company.name}</p>
            </Link>
        </div>
    );
}