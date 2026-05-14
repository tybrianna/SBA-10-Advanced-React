import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { endpoints } from "../services/api";
import { useFavorites } from "../context/FavoritesContext";
import Spinner from "../components/Spinner";

const RecipeDetailPage = () => {
  const { recipeId } = useParams();

  const { data } = useFetch<any>(
    endpoints.mealDetails(recipeId!)
  );

  const {
    addFavorite,
    removeFavorite,
    isFavorite,
  } = useFavorites();

  const recipe = data?.meals[0];

  if (!recipe) return <Spinner />;

  const favorite = isFavorite(recipeId!);

  return (
    <div>
      <h1>{recipe.strMeal}</h1>

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        width="300"
      />

      <p>{recipe.strInstructions}</p>

      <button
        onClick={() =>
          favorite
            ? removeFavorite(recipeId!)
            : addFavorite(recipeId!)
        }
      >
        {favorite
          ? "Remove from Favorites"
          : "Add to Favorites"}
      </button>
    </div>
  );
};

export default RecipeDetailPage;