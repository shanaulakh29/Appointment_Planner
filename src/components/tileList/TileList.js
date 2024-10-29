import React from "react";
import {Tile} from "/Users/shan/Desktop/appointment-planner-starting-v18/src/components/tile/Tile.js"
export const TileList = ({listarray}) => {
  
  return (
    <div>
      {listarray.map((obj,index)=> {
       const {name,...rest}= obj
       return <Tile name={name} description={rest} key={index}/>
})}
    </div>
  );
};
