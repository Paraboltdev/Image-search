import React from "react";
import { Searchbar } from "./Searchbar";
import "./navbar.css";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useSearchParams();
  const search = query.get("search");

  return (
    <div className="navbar-div">
      <div className="logo">
        <Link to="/">
          <h1>C-image search</h1>
        </Link>
      </div>

      <div className="search_input_nav">
        <form>
          <input
            className="input-search"
            onChange={(e) => {
              const value = e.target.value;
              setQuery({ search: value });
            }}
            type="text"
            placeholder="Search..."
            value={search ?? ""}
            autoFocus
          />
          <FaSearch className="btn_search"  type="submit" />
        </form>
      </div>

      <button className="btn-upload">Login</button>
    </div>
  );
};

export default Navbar;
