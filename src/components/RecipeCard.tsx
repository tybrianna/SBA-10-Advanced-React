import { Link } from "react-router-dom";

type Props = {
  id: string;
  title: string;
  image: string;
};

const RecipeCard = ({
  id,
  title,
  image,
}: Props) => {
  return (
    <div>
      <img
        src={image}
        alt={title}
        width="200"
      />

      <h3>{title}</h3>

      <Link to={`/recipe/${id}`}>
        View Recipe
      </Link>
    </div>
  );
};

export default RecipeCard;