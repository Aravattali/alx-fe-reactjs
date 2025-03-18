function UserProfile() {
    return (
        <div className="user-profile bg-gray-100 md:p-8 sm:p-4 max-w-xs sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center">
            <img
                src="https://via.placeholder.com/150"
                alt="User"
                className="sm:w-24 h-24 md:w-36 h-36"
            />
            <h1 className="text-lg sm:text-xl md:">John Doe</h1>
            <p className="text-gray-600 md:text-xl sm:text-sm ">Developer at Example Co. Loves to write code and explore new technologies.</p>
        </div>
    );
}

export default UserProfile;