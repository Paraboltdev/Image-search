import React from "react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Card } from "./Card";

import "./homepage.css";
import { useSearchParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { createClient } from "pexels";
import { Spinner } from "./Spinner";
import HttpRequest from "../Helpers/HttpRequest";

export function HomePage({search}) {
  const [result, setResult] = useState([]);
  const [text, setText] = useState("");
  const [photos, setPhotos] = useState([]);
  const [hasmore, setHasmore] = useState(true);
  const [count, setCount] = useState();
  const [isLoading, setIsLoading] = useState(null);

 

  const [pageNumber, setPageNumber] = useState(1);

  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setText(e.target.value);
  };

  const pexelsKey = process.env.REACT_APP_PEXELS_KEY;
  const apiKey = process.env.REACT_APP_PIXABAY_KEY;
  const url = "https://pixabay.com/api/?key=" + apiKey + "&q=";
  const pexelsUrl = "https://api.pexels.com/v1/search?query=";
  const client = createClient(pexelsKey);
  const pexelsCurated = "https://api.pexels.com/v1/curated/?";

  useEffect(() => {

    setIsLoading(true)
    const searchUrl = search
      ? 'search?query=' + search + "&page=" + pageNumber
      :'curated/?&page=' + pageNumber;
    
     HttpRequest(searchUrl)
        .then((data) => {
          console.log(data);
          setResult(data.photos);
          setPhotos((prevPhotos) => prevPhotos.concat(data.photos));
          setIsLoading(false)
          setHasmore(data.page < data.total_results);
        })
        .catch((err) => console.log(err));
      setCount();
    
  }, [search, pageNumber]);

  

  if (!isLoading && photos.length === 0) {
    return <p className="no_match">No matches</p>;
  }

  return (
    <div className="container">
      <InfiniteScroll
        dataLength={photos.length}
        next={() => setPageNumber((prevPageNumber) => prevPageNumber + 1)}
        hasMore={hasmore}
       
       
        
      >
        <ul className="grid_div">
          {photos.map((photo, index) => (
            <Card key={index} photo={photo} />
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
}
