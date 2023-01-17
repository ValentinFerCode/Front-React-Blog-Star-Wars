import React from "react";
import { Link } from "react-router-dom";



const Cards = (props) => {
  console.log(props);
  return (
    // Carticas de los personajes
    <div className="card text-center mb-3" style={{width: "18rem"}}>
      <div className="card-body">
        {/* //pase nombres de forma dinamica */}
        <h5 className="card-title">{props.nombre}</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        {/* <Link to={"/single/"+props.id} classNameName="btn btn-primary">Go somewhere</Link> //Colocamos link a la pagina q queremos visitar*/}
        <Link to={"/single/"+props.id} className="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
};

export default Cards;
