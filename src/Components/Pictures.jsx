import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { createClient } from "pexels";

import "./picture.css";
import { Spinner } from "./Spinner";
import HttpRequest from "../Helpers/HttpRequest";

export function Pictures() {
  const [isLoading, setIsLoading] = useState(null);
  const [pics, setPics] = useState(null);

  const pexelsKey = process.env.REACT_APP_PEXELS_KEY;

  const pexelsUrl = "https://api.pexels.com/v1/photos/";
  const client = createClient(pexelsKey);

  const { photoId } = useParams();
  console.log({ photoId });

  useEffect(() => {
    HttpRequest('photos/' + photoId)
      .then((data) => {
        console.log(data);
        setPics(data);
      })
      .catch((err) => console.log(err));
  }, [photoId]);

  if (isLoading) {
    return <Spinner />;
  }
  if (!pics) {
    return null;
  }

  return (
    <div className="pic_div">
      <div className="info_div">
      <img src ={pics.src.large2x} className='pic_img' 
                    alt={pics.alt}
                />
        <p>
          <b>Photographer:</b> {pics.photographer}{" "}
        </p>
      </div>
    </div>
  );
}
