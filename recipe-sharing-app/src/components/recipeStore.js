// setRecipes

import create from 'zustand';

const useRecipeStore = create(set => ({
    recipes: [], // Stores all recipes
    searchTerm: '', // Holds the current search term
    filteredRecipes: [], // Stores the filtered recipes

    // Set the search term in the store
    setSearchTerm: (term) => set({ searchTerm: term }),

    // Filter recipes based on search term
    filterRecipes: () => set(state => ({
        filteredRecipes: state.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
            recipe.ingredients.some(ingredient =>
                ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
            ) ||
            recipe.prepTime.toString().includes(state.searchTerm)
        ),
    })),
}));

export default useRecipeStore;