import React, { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        if (!title) tempErrors.title = "Recipe title is required.";
        if (!ingredients) tempErrors.ingredients = "At least two ingredients are required.";
        if (!steps) tempErrors.steps = "Preparation steps are required.";

        const ingredientList = ingredients.split(",").map(item => item.trim());
        if (ingredientList.length < 2) {
            tempErrors.ingredients = "Please enter at least two ingredients.";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        // Submit recipe
        const newRecipe = {
            id: Date.now(),
            name: title,
            ingredients: ingredients.split(",").map(item => item.trim()),
            instructions: steps,
        };
        onAddRecipe(newRecipe);

        // Clear form
        setTitle("");
        setIngredients("");
        setSteps("");
        setErrors({});
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-10 md:max-w-xl lg:max-w-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Add a New Recipe</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Recipe Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter recipe title"
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Ingredients (comma-separated):</label>
                    <textarea
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., Flour, Sugar, Butter"
                        rows="3"
                    ></textarea>
                    {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Preparation Steps:</label>
                    <textarea
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Describe the preparation steps"
                        rows="4"
                    ></textarea>
                    {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Add Recipe
                </button>
            </form>
        </div>
    );
};

export default AddRecipeForm;