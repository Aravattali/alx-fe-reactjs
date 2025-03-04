import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

    return (
        <button onClick={() => {
            deleteRecipe(recipeId);
            onDelete();
        }}>
            Delete Recipe
        </button>
    );
};

export default DeleteRecipeButton;
