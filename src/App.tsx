import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import FavoritesPage from "./pages/FavoritesPage.tsxSearchResultsPage";
import SearchResultsPage from "./pages/SearchPage";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/category/:categoryName"
          element={<CategoryPage />}
        />

        <Route
          path="/recipe/:recipeId"
          element={<RecipeDetailPage />}
        />

        <Route
          path="/favorites"
          element={<FavoritesPage />}
        />

        <Route
          path="/search"
          element={<SearchResultsPage />}
        />
      </Routes>
    </div>
  );
};

export default App;