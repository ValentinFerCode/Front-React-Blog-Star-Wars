import React from "react";
import { Link } from "react-router-dom";



const Cards = (props) => {
  console.log(props);
  return (
    // Carticas de los personajes
    <div className="card text-center mb-3 d-flex display: flex;" style={{width: "18rem"}}>
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


{/* <div class="card" style={{width: "25rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.nombre}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <div className="card-body">
    <a href="#" class="card-link">Favourite</a>
    <Link to={"/single/"+props.id} className="btn btn-primary">
          Go somewhere
        </Link>
  </div>
</div> */}