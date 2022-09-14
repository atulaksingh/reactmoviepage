import React from "react";
import "../MovieModel/Moviemodel.css";

export default function MovieModel(props) {
  return (
    <div className="moviemodel-header">
      <img src={props.img} alt="" className="model-img" />
      <h3>{props.title}</h3>
      <p>
        {props.year} <span className="action">({props.genre})</span>
      </p>
      <p>{props.desc}</p>
      <button className="btn-dark">Watch Trailer</button>
    </div>
  );
}
