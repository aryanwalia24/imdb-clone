import React, { useState } from "react";
import "./components/css/App.css";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchQuery, setSearchQuery] = useState("Batman");

  const handleSearch = query => {
    setSearchQuery(query);
  };
  return (
    <div className="App">
      {/* Background image */}
      <div className="background-image" />
      {/* Content */}
      <div className="content">
        <h1>IMDb Clone</h1>
        <SearchBar onSearch={handleSearch} /> {/*  SearchBar */}
        <MovieList searchQuery={searchQuery} /> {/* SearchQuery  */}
      </div>
    </div>
  );
}
export default App;


















































