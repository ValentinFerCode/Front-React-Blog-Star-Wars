import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Cards = (props) => {
  const { store, actions } = useContext(Context);
  console.log(props.name);
  return (
    // Carticas de los personajes
    <div
      className="cards mx-4 my-4 justify-content-center w-100"
      style={{ marginTop: "20px" }}
    >
      <div className="card" style={{ backgroundColor: "transparent" }}>
        {/* https://starwars-visualguide.com/assets/img/characters/3.jpg */}
        {/* se cito el link de la imagen de los char y concateno mediante "+props.id+".jpg" */}
        <img
          src={
            "https://starwars-visualguide.com/assets/img/characters/" +
            props.id +
            ".jpg"
          }
          className="card-img-top"
          alt=""
        />

        <div className="card-body bg-light text-center">
          <h5 className="card-title">{props.name}</h5>
        </div>
        {/* descripcion de los characters */}

        {/* <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul> */}

        {/*acá linkeamos hacia los detalles del character y concatene el id */}
        <div className="card-body d-flex justify-content-between align-items-center bg-light">
          <div>
            <Link to={"/single/" + props.id} className="btn btn-primary">
              Detalles
            </Link>
          </div>
          <div>
            <button
              onClick={() => actions.agregarFavoritos(props.id, props.name)}
            >
              <i className="fa fa-star"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
