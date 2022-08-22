import React, { useRef } from 'react';
import "./SearchInput.css";

const SearchInput = () => {
    const searchValue = useRef();
  return (
    <section class="section search">
        <form class="search-form">
            <div class="form-control">
                <label for="name">Search Cocktail</label>
                <input type="text" name="name" id="name" ref={searchValue} />
            </div>
        </form>
    </section>
  )
}

export default SearchInput