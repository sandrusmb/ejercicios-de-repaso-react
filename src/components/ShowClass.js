import React from "react";

class ShowClass extends React.Component {
  render() {
    return (
      <div>
        <h3>Soy una clase</h3>
        <p>Serie: {this.props.name}</p>
        <p>Género: {this.props.genero}</p>
      </div>
    );
  }
}

export default ShowClass;
