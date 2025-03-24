import React, { useState } from 'react';
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

            {/* Error Message */}
            {error && <p>{error}</p>}

            {/* Display user data if available */}
            {username && !error && !loading && (
                <div>
                    <h3>User Information</h3>
                    <img
                        src={setUserData?.avatar_url}
                        alt={setUserData?.login}
                        width="100"
                    />
                    <p>Username: {setUserData?.login}</p>
                    <p>Name: {setUserData?.name}</p>
                    <a href={setUserData?.html_url} target="_blank" rel="noopener noreferrer">
                        View GitHub Profile
                    </a>
                </div>
            )}
        </div>
    );
}


export default Search;
