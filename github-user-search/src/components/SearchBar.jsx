import React, { useState } from 'react';
import { fetchUser } from '../services/api';

function SearchBar({ setUserData }) {
    const [username, setUsername] = useState('');

    const handleSearch = async () => {
        const data = await fetchUser(username);
        setUserData(data);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;