import { getSuggestedQuery } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./searchbar.css";


export function Searchbar() {
  const [text, setText] = useState("");
  const navigate= useNavigate()
  const [query, setQuery] = useSearchParams();
  const search = query.get("search");

  useEffect(() => {
    setText(search || "");
  }, [search]);

  const handleSubmit=(e)=>{
    
    setText("")
      e.preventDefault()

      navigate("?search=" + text);

  }
  return (
    <div className="search-div">
      <form onSubmit={handleSubmit}>
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
        <div>

        <FaSearch className="btn_search" />
        </div>
      </form>
    </div>
  );
}
