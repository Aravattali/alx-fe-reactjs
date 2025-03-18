import { useState, useEffect } from "react";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("/src/data.json")
            .then((response) => response.json())
            .then((data) => setRecipes(data))
            .catch((error) => console.error("Error loading data:", error));
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Recipe List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {recipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
                    >
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-48 object-cover rounded-md"
                        />
                        <h2 className="text-xl font-semibold mt-4 text-gray-900">{recipe.title}</h2>
                        <p className="text-gray-700 mt-2">{recipe.summary}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;