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
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Add a New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Recipe Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="Enter recipe title"
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Ingredients (comma-separated):</label>
                    <textarea
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="e.g., Flour, Sugar, Butter"
                    ></textarea>
                    {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Preparation Steps:</label>
                    <textarea
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="Describe the preparation steps"
                    ></textarea>
                    {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                    Add Recipe
                </button>
            </form>
        </div>
    );
};

export default AddRecipeForm;