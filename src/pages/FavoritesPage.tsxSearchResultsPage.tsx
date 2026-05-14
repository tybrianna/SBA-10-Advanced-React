import { useFavorites } from "../context/FavoritesContext";

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <h1>Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        favorites.map((id) => (
          <p key={id}>{id}</p>
        ))
      )}
    </div>
  );
};

export default FavoritesPage;