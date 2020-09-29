import React from "react";

export default function Pet({ name, animal, breed, media, location, id }) {
  let hero = media.length ? media[0].small : "http://placecorgi.com/300/300";

  return (
    <a href={`details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name}></img>
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{animal}</h2>
        <h2>{breed}</h2>
        <h2>{location}</h2>
      </div>
    </a>
  );
}
