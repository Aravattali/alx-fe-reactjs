import React from 'react';

function UserProfile({ user }) {
    if (!user) return null;

    return (
        <div>
            <h2>{user.name || 'No Name Available'}</h2>
            <p>{user.bio || 'No bio available'}</p>
            <img src={user.avatar_url} alt={user.name} width="100" />
            <p><a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a></p>
        </div>
    );
}

export default UserProfile;