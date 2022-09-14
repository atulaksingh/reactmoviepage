import "../moviesfolder/Movies.css";
import Backdrop from "../MovieModel/Backdrop";
import MovieModel from "../MovieModel/MovieModel";
import React, { useState } from "react";

export default function Movies(props) {
  const [model, setmodel] = useState(false);
  function moviehandler() {
    setmodel(true);
    console.log(props.title);
    console.log(props.desc);
  }
  function MoviecloseHandler() {
    setmodel(false);
  }
  return (
    <>
      <div className="movie-card">
        <img
          src={props.img}
          alt=""
          className="movie-card-img"
          onClick={moviehandler}
        />
        <h4>{props.title}</h4>
        <p>{props.year}</p>
      </div>
      {model ? (
        <MovieModel
          title={props.title}
          img={props.img}
          genre={props.genre}
          year={props.year}
          desc={props.desc}
        />
      ) : null}
      {model ? <Backdrop onClick={MoviecloseHandler} /> : null}
    </>
  );
}
