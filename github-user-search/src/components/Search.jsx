import React, { useState } from 'react';
import { fetchUserData } from '../services/api';

function SearchBar({ setUserData }) {
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        setLoading(true);
        setError(null);
        const data = await fetchUserData(username);
        if (data) {
            setUserData(data);
        } else {
            setError("Looks like we can't find the user");
        }
        setLoading(false);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleSearch} disabled={loading}>
                {loading ? 'Loading...' : 'Search'}
            </button>
            {error && <p>{error}</p>}
        </div>
    );
}

export default SearchBar;