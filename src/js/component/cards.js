import React from "react";
import { Link } from "react-router-dom";



const Cards = (props) => {
  console.log(props);
  return (
    // Carticas de los personajes
    <div className="card text-center mb-3" style={{width: "15rem"}}>
      <div className="card" style={{width: "15rem"}}>
      {/* https://starwars-visualguide.com/assets/img/characters/3.jpg */}
  <img src={"https://starwars-visualguide.com/assets/img/characters/"+props.id+".jpg"} className="card-img-top" alt="look it"/>
  <div className="card-body">
    <h5 className="card-title">{props.nombre}</h5>
  </div>
  {/* <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul> */}
  <div className="card-body">
    <Link to={"/single/"+props.id} className="btn btn-primary">
          Go somewhere
        </Link>
    <a href="#" className="card-link">Favourite</a>
  </div>
</div>
    </div>
  );
};

export default Cards;