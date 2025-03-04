import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const favorites = useRecipeStore(state => state.favorites);

    // Filter the favorites array to get the actual recipe objects
    const favoriteRecipes = favorites.map(id =>
        recipes.find(recipe => recipe.id === id)
    );

    return (
        <div>
            <h2>My Favorites</h2>
            {favoriteRecipes.length === 0 ? (
                <p>No favorites added yet!</p>
            ) : (
                favoriteRecipes.map(recipe => (
                    <div key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};
