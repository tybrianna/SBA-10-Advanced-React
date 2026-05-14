import { useFetch } from "../hooks/useFetch";
import { endpoints } from "../services/api";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { data, loading, error } =
    useFetch<any>(endpoints.categories);

  if (loading) return <Spinner />;

  if (error)
    return <ErrorMessage message={error} />;

  return (
    <div>
      <h1>Recipe Categories</h1>

      {data?.categories.map((category: any) => (
        <Link
          key={category.idCategory}
          to={`/category/${category.strCategory}`}
        >
          <h2>{category.strCategory}</h2>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;