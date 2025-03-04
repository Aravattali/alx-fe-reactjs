import React, { useEffect } from 'react';
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
    const { filteredRecipes, filterRecipes } = useRecipeStore(state => ({
        filteredRecipes: state.filteredRecipes,
        filterRecipes: state.filterRecipes,
    }));

    // Trigger filterRecipes whenever the search term changes
    useEffect(() => {
        filterRecipes();
    }, [filterRecipes]);

    return (
        <div>
            {filteredRecipes.length > 0 ? (
                filteredRecipes.map(recipe => (
                    <div key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.ingredients.join(', ')}</p>
                        <p>Prep Time: {recipe.prepTime} minutes</p>
                    </div>
                ))
            ) : (
                <p>No recipes found</p>
            )}
        </div>
    );
};

export default RecipeList;