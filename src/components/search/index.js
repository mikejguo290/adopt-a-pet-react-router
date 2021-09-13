import React, { useRef } from 'react';

// import useHistory here.
// search component is rendered on Navigation as <Search>. this will be used to redirect users to Search Page. (looks similar in src files!)
import { useHistory } from 'react-router-dom';

const Search = () => {

  // get the history object here
   // use the hook, useHistory here. to imperatively redirect user.
  let history = useHistory();

  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = new URLSearchParams({
      name: searchInputRef.current.value
    }).toString();

    // imperatively redirect with history.push();
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
