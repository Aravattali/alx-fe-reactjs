import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setLoading(true);
        setError(null);

        // Fetch user data based on advanced search parameters
        const data = await fetchUserData(username, location, minRepos);

        if (data) {
            setUsers(data);
        } else {
            setError("Looks like we can't find any users.");
        }

        setLoading(false);
    };

    return (
        <div>
            <h1>GitHub User Search</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Minimum repositories"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Search'}
                </button>
            </form>

            {error && <p>{error}</p>}

            {users && users.length > 0 ? (
                <div>
                    <h2>Search Results:</h2>
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>
                                <img src={user.avatar_url} alt={user.login} width="50" />
                                <h3>{user.login}</h3>
                                <p>Location: {user.location || 'Not provided'}</p>
                                <p>Repositories: {user.public_repos}</p>
                                <p>
                                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                                        View Profile
                                    </a>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No users found.</p>
            )}
        </div>
    );
}

export default Search;

//Looks like we cant find the user

