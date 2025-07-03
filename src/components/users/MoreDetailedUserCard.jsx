import {Link} from "react-router-dom";

export default function MoreDetailedUserCard({ user }) {

    return (
        <div className="p-4 sm:p-5 md:p-6 bg-gray-50  font-inter">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 sm:p-8 md:p-10 flex flex-col items-center text-center">
                    <div className="w-14 h-14  rounded-full bg-white flex items-center justify-center shadow-md mb-4 border-4 border-white">
            <span className="text-blue-600 text-xl sm:text-3xl font-bold">
              {user.name.charAt(0).toUpperCase()}
            </span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-1">
                        {user.name}
                    </h1>
                    <p className="text-base sm:text-lg font-light opacity-90">@{user.username}</p>
                </div>
                <div className="p-5 sm:p-6 md:p-8 space-y-6 sm:space-y-7">
                    <section className="bg-gray-50 p-5 rounded-lg shadow-inner border border-gray-100">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
                            Personal & Contact
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3 text-gray-700 text-sm">
                            <p><strong className="font-medium text-gray-900">Email:</strong> {user.email}</p>
                            <p><strong className="font-medium text-gray-900">Phone:</strong> {user.phone}</p>
                            <p><strong className="font-medium text-gray-900">Website:</strong>
                                <a
                                    href={`http://${user.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline ml-1"
                                >
                                    {user.website}
                                </a>
                            </p>
                        </div>
                    </section>

                    {/* Address Information */}
                    <section className="bg-gray-50 p-5 rounded-lg shadow-inner border border-gray-100"> {/* Reduced section padding */}
                        {/* Slightly reduced font size for headings */}
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
                            Address
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-3 text-gray-700 text-sm"> {/* Adjusted gap and text size */}
                            <p><strong className="font-medium text-gray-900">Street:</strong> {user.address.street}</p>
                            <p><strong className="font-medium text-gray-900">Suite:</strong> {user.address.suite}</p>
                            <p><strong className="font-medium text-gray-900">City:</strong> {user.address.city}</p>
                            <p><strong className="font-medium text-gray-900">Zipcode:</strong> {user.address.zipcode}</p>
                            <p className="col-span-1 sm:col-span-2 md:col-span-3">
                                <strong className="font-medium text-gray-900">Geolocation:</strong> Lat {user.address.geo.lat}, Lng {user.address.geo.lng}
                            </p>
                        </div>
                    </section>

                    {/* Company Information */}
                    <section className="bg-gray-50 p-5 rounded-lg shadow-inner border border-gray-100"> {/* Reduced section padding */}
                        {/* Slightly reduced font size for headings */}
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
                            Company
                        </h2>
                        <div className="grid grid-cols-1 gap-y-3 text-gray-700 text-sm"> {/* Adjusted gap and text size */}
                            <p><strong className="font-medium text-gray-900">Name:</strong> {user.company.name}</p>
                            <p><strong className="font-medium text-gray-900">Catch Phrase:</strong> "{user.company.catchPhrase}"</p>
                            <p><strong className="font-medium text-gray-900">Business Strategy:</strong> {user.company.bs}</p>
                        </div>
                    </section>

                </div>

                {/* Back Button */}
                {/* Reduced padding from p-6 sm:p-8 md:p-10 to p-5 sm:p-6 md:p-8 */}
                <div className="p-5 sm:p-6 md:p-8 bg-gray-100 border-t border-gray-200 flex justify-center">
                    <Link
                        to="/users"
                        className="inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-gray-800 bg-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105" // Adjusted padding and font size
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor"> {/* Adjusted icon size */}
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H16a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Back to User List
                    </Link>
                </div>
            </div>
        </div>
    );
}