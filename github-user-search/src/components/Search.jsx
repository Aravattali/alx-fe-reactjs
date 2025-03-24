import React, { useState } from 'react';
import { fetchUserData } from '../services/api';
import { fetchUserData } from '../services/githubService';

function Search({ setUserData }) {
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault(); // Prevent form submission and page reload
        if (!username) return;

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
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Search'}
                </button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
}

export default Search;
