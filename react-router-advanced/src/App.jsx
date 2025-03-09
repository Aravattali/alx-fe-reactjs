// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProfileDetails from './pages/ProfileDetails';
import ProfileSettings from './pages/ProfileSettings';
import BlogPost from './pages/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected route for profile */}
        <Route path="/profile" element={<ProtectedRoute />}>
          {/* Nested routes under /profile */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic route for blog post */}
        <Route path="/post/:postId" element={<BlogPost />} />
      </Routes>
    </Router>
  );
};

export default App;
