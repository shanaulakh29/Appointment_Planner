import React from "react";


export const Tile = ({name,description}) => {
  return (
    <>
    <p className="tile-title">{name}</p>
    {Object.values(description).map((value,index)=>(
      <p className="tile" key={index}>{value}</p>))}
    </>
  )
};
