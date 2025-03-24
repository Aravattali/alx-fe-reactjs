import React from 'react';

function UserProfile({ user }) {
    if (!user) return null;

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">{user.login}</h2>
            <img src={user.avatar_url} alt={user.login} width="100" className="rounded-full" />
            <p><strong>Name:</strong> {user.name || 'No Name Available'}</p>
            <p><strong>Location:</strong> {user.location || 'No location available'}</p>
            <p><strong>Repositories:</strong> {user.public_repos || 'No repositories'}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Profile</a>
        </div>
    );
}

export default UserProfile;
