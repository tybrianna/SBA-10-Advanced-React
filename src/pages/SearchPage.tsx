import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { endpoints } from "../services/api";
import RecipeCard from "../components/RecipeCard";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query");

  const { data } = useFetch<any>(
    endpoints.searchMeals(query || "")
  );

  return (
    <div>
      <h1>Search Results</h1>

      {data?.meals?.map((meal: any) => (
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

export default SearchResultsPage;