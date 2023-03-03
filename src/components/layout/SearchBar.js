import { useState } from "react";
import styles from "./SearchBar.module.css";


const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form1 onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Search meals..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button id="btn" type="submit">Search</button>
    </form1>
  );
};

export default SearchBar;
