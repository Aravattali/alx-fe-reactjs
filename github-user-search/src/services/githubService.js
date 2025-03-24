import axios from 'axios';

// GitHub API endpoint for searching users with query parameters
const GITHUB_SEARCH_URL = 'https://api.github.com/search/users';

// This function will now accept additional parameters for location and minRepositories
export const fetchUserData = async(username = '', location = '', minRepos = 0) => {
        try {
            // Build the query string with optional filters
            let query = `in:login ${username ? `+${username}` : ''}`;

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos > 0) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(`${GITHUB_SEARCH_URL}?q=${query}`);
    
    // Return the items (users) from the search response
    return response.data.items;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};