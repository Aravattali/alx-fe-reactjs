import create from 'zustand';

const useRecipeStore = create(set => ({
    recipes: [],
    favorites: [],
    recommendations: [],

    // Action to add a recipe to favorites
    addFavorite: (recipeId) => set(state => ({
        favorites: [...state.favorites, recipeId],
    })),

    // Action to remove a recipe from favorites
    removeFavorite: (recipeId) => set(state => ({
        favorites: state.favorites.filter(id => id !== recipeId),
    })),

    // Action to generate personalized recommendations
    generateRecommendations: () => set(state => {
        // Mock implementation based on favorites
        const recommended = state.recipes.filter(recipe =>
            state.favorites.includes(recipe.id) && Math.random() > 0.5
        );
        return { recommendations: recommended };
    }),

    // Action to set the recipes
    setRecipes: (newRecipes) => set({ recipes: newRecipes }),
}));

export default useRecipeStore;