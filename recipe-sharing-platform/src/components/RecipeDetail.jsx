import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then((data) => {
                const foundRecipe = data.recipes.find((recipe) => recipe.id.toString() === id);
                if (foundRecipe) {
                    setRecipe(foundRecipe);
                } else {
                    setError("Recipe not found");
                }
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p className="text-center text-lg font-semibold">Loading...</p>;
    if (error) return <p className="text-center text-red-500 font-semibold">{error}</p>;
    if (!recipe) return <p className="text-center text-gray-500">Recipe not found.</p>;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">{recipe.name}</h1>
            <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">Ingredients</h2>
                <ul className="list-disc pl-5 space-y-2">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-gray-600">{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">Instructions</h2>
                <p className="text-gray-600 leading-relaxed">{recipe.instructions}</p>
            </div>
        </div>
    );
};

export default RecipeDetail;