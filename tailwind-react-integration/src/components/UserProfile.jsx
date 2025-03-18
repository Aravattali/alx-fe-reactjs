function UserProfile() {
    return (
        <div className="user-profile bg-gray-100 md:p-8 sm:p-4 max-w-xs sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center hover:shadow-xl">
            <img
                src="https://via.placeholder.com/150"
                alt="User"
                className="sm:h-24  sm:w-24 md:h-36  md:w-36 hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <h1 className="text-lg sm:text-xl md:  hover:text-blue-500">John Doe</h1>
            <p className="text-gray-600 md:text-xl sm:text-sm ">Developer at Example Co. Loves to write code and explore new technologies.</p>
        </div>
    );
}

export default UserProfile;