import React, { useRef } from 'react';

// import useHistory here.
// search component is rendered on Navigation as <Search>. this will be used to redirect users to Search Page. (looks similar in src files!)
import { useHistory } from 'react-router-dom';

const Search = () => {

  // get the history object here
   // use the hook, useHistory here. to imperatively redirect user.
  let history = useHistory();

  const searchInputRef = useRef(); //? useRef?

  const onSearchHandler = (e) => {
    e.preventDefault();
    
    const searchQuery = new URLSearchParams({ // construct a search params object with name property. lesson depicted URLSearchParams taking in string!
      name: searchInputRef.current.value
    }).toString(); // Why toString? is it modified for searchQuery?

    // imperatively redirect with history.push();
    history.push(`/search?${searchQuery}`);
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
