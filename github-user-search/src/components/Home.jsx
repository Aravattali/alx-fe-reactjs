import React, { useState } from 'react';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';

function Home() {
    const [userData, setUserData] = useState(null);

    return (
        <div>
            <h1>GitHub User Search</h1>
            <SearchBar setUserData={setUserData} />
            {userData && <UserProfile user={userData} />}
        </div>
    );
}

export default Home;
