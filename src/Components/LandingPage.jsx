import React from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";

import { HomePage } from "./HomePage";

const LandingPage = () => {
  const [query, setQuery] = useSearchParams();
  const search = query.get("search");
  const debounceSearch = useDebounce(search, 700);
  return (
    <div>
      <HomePage key={debounceSearch} search={debounceSearch} />
    </div>
  );
};

export default LandingPage;
