// src/components/Profile.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            <h2>Profile Page</h2>
            <nav>
                <ul>
                    <li><Link to="details">Profile Details</Link></li>
                    <li><Link to="settings">Profile Settings</Link></li>
                </ul>
            </nav>
            <Router>
                <Routes>
                    {/* Home Route */}
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
            <Outlet /> {/* Render nested routes like ProfileDetails and ProfileSettings */}
        </div>
    );
};

export default Profile;
