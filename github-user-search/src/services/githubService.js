import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users';

// Function to fetch user data from GitHub
export const fetchUserData = async(username) => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}/${username}`);
        return response.data; // Returns user data
    } catch (error) {
        console.error('Error fetching user:', error);
        return null; // Return null in case of an error
    }
};