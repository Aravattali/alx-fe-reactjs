import useRecipeStore from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
    const navigate = useNavigate(); // Get navigate function
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

    return (
        <button onClick={() => {
            deleteRecipe(recipeId);
            onDelete();
            navigate('/recipes'); // Redirect to the recipes page after deleting
        }}>
            Delete Recipe
        </button>
    );
};

export default DeleteRecipeButton;
