import create from 'zustand';

const useRecipeStore = create(set => ({
    recipes: [],
    searchTerm: '',
    filteredRecipes: [],

    // Action to add a recipe
    addRecipe: (newRecipe) => set(state => ({
        recipes: [...state.recipes, newRecipe],
    })),

    // Action to update a recipe
    updateRecipe: (updatedRecipe) => set(state => ({
        recipes: state.recipes.map(recipe =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        ),
    })),

    // Action to delete a recipe
    deleteRecipe: (recipeId) => set(state => ({
        recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
    })),

    // Action to set the search term
    setSearchTerm: (term) => set({ searchTerm: term }),

    // Action to filter recipes based on the search term
    filterRecipes: () => set(state => ({
        filteredRecipes: state.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
            recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(state.searchTerm.toLowerCase()))
        ),
    })),
}));

export default useRecipeStore;