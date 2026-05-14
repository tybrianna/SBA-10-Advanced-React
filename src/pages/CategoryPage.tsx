import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { endpoints } from "../services/api";
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

const CategoryPage = () => {
  const { categoryName } = useParams();

  const { data, loading, error } =
    useFetch<any>(
      endpoints.mealsByCategory(categoryName!)
    );

  if (loading) return <Spinner />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <h1>{categoryName}</h1>

      {data?.meals.map((meal: any) => (
        <RecipeCard
          key={meal.idMeal}
          id={meal.idMeal}
          title={meal.strMeal}
          image={meal.strMealThumb}
        />
      ))}
    </div>
  );
};

export default CategoryPage;