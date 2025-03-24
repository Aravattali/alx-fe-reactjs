import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search({ setUserData }) {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault(); // Prevent form submission and page reload
        if (!username && !location && !minRepos) return;

        setLoading(true);
        setError(null);

        const data = await fetchUserData(username, location, minRepos);
        if (data) {
            setUserData(data);
        } else {
            setError("Looks like we cant find the user");
        }
        setLoading(false);
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <form onSubmit={handleSearch} className="space-y-4">
                {/* GitHub Username */}
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter GitHub username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Location */}
                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        id="location"
                        type="text"
                        placeholder="Enter location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Minimum Repositories */}
                <div>
                    <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700">Min Repositories</label>
                    <input
                        id="minRepos"
                        type="number"
                        placeholder="Enter min repo count"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Search Button */}
                <button type="submit" disabled={loading} className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {loading ? 'Loading...' : 'Search'}
                </button>
            </form>

            {/* Error Message */}
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </div>
    );
}

export default Search;

