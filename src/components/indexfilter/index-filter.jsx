import React from "react";

import "./index-filter.scss";

const IndexFilter = ({getClickedIndex}) => {

  const alphabet = ["All", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  return (
    <>
      <ul className="alphabet">
        {alphabet.map(letter => {

          return (
            <li onClick={getClickedIndex} data-letter={letter} key={letter}>{letter}</li>
          )

        })
        }
      </ul>
    </>
  );
};

export default IndexFilter;
