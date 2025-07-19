import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "./ui/input";
import { setSearchTerm } from "../slices/userSlice";
import { RootState } from "../reducer";

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.users.searchTerm);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="w-full max-w-md relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 text-neutral-400" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" 
            clipRule="evenodd" 
          />
        </svg>
      </div>
      <Input
        type="text"
        placeholder="Search by name, item, or status..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full pl-10 pr-4 py-2 nexus-input"
      />
    </div>
  );
};

export default SearchBar; 