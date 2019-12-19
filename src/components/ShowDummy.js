import React from "react";

function ShowDummy(props) {
  return (
    <div>
      <h3>Soy dummy</h3>
      <p>Serie: {props.name}</p>
      <p>Género: {props.genero}</p>
    </div>
  );
}

export default ShowDummy;
