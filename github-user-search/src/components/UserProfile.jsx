import React from 'react';

function UserProfile({ user }) {
    if (!user) return <p>No user data available</p>;

    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            <img src={user.avatar_url} alt={user.name} width="100" />
            <p><a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a></p>
        </div>
    );
}

export default UserProfile;