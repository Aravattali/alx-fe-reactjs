function Home() {
  return (
    <div>
      <h1>GitHub User Search</h1>
      <p>Start building your search functionality here.</p>
    </div>
  );
}

export default Home;

// src/services/api.js
const GITHUB_API_URL = 'https://api.github.com/users';

export const fetchUser = async (username) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/${username}`);
    if (!response.ok) {
      throw new Error('User not found');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;