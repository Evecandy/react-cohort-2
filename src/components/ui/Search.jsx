import React from "react";

const Search = ({ searchTerm, onSearchChange }) => (
    <div className="flex justify-center my-4">
        <input
            type="text"
            placeholder="Search todos..."
            value={searchTerm}
            onChange={onSearchChange}
            className="border px-3 py-2 rounded w-1/2"
        />
    </div>
);

export default Search;