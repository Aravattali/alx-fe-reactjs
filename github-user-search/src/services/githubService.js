import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/users';

export const fetchUserData = async(username, location, minRepos) => {
    try {
        const query = buildSearchQuery(username, location, minRepos);
        const response = await axios.get(`${GITHUB_API_URL}?q=${query}`);
        return response.data.items; // Return the list of users
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
};

// Build the search query based on input parameters
const buildSearchQuery = (username, location, minRepos) => {
    let query = '';
    if (username) query += `user:${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos} `;
    return query.trim().replace(/\s+/g, '+'); // Replace spaces with '+' for URL format
};