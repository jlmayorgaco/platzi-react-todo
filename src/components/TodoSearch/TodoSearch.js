import React from 'react';
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {

  return (
      <form className="todo__search">
        <input
          type="text"
          placeholder="Search..."
          id="search_keyword"
          name="search_keyword"
          value={searchValue}
          onChange={($event) => setSearchValue($event.target.value)}
        />
        <img alt="icon" src="https://ingjorgeluismayorga.github.io/platzi-react-todo/loupe.png"/>
      </form>
  );
}

export { TodoSearch };
