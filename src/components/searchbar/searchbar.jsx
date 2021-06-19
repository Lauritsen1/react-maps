import React from "react";

import "./searchbar.scss";

const SearchBar = ({input:keyword, onChange:setKeyword}) => {

    return (
        <>
            <div className="search">
                <input 
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="search__bar" 
                type="text" 
                placeholder="Search fx 'Denmark'" />
            </div>
        </>
    );
};

export default SearchBar;
