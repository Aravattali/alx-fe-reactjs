import React from 'react';
import useRecipeStore from '../store/recipeStore';
//setSearchTerm , searchTerm 

const SearchBar = () => {
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term); // Update search term in store
    };

    return (
        <input
            type="text"
            placeholder="Search recipes..."
            onChange={handleSearch}
        />
    );
};

export default SearchBar;