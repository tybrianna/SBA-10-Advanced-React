import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

const handleSubmit = (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  navigate(`/search?query=${query}`);
};

  return (
    <nav>
      <Link to="/">Home</Link>

      <Link to="/favorites">
        Favorites
      </Link>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search recipes..."
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
        />

        <button type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;  