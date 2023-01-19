import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";



const Cards = (props) => {
  const {store, actions}=useContext(Context);
  return (

    // Carticas de los personajes
    <div className="cards mx-4 my-4 justify-content: center;" style={{width: "12rem"}}>

      <div className="card">
                 {/* https://starwars-visualguide.com/assets/img/characters/3.jpg */}
                 {/* se cito el link de la imagen de los char y concateno mediante "+props.id+".jpg" */}
        <img src={"https://starwars-visualguide.com/assets/img/characters/"+props.id+".jpg"} className="card-img-top" alt=""/>

          <div className="card-body">
            <h5 className="card-title">{props.nombre}</h5>
          </div>
              {/* descripcion de los characters */}
              
            {/* <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul> */}

             {/*acá linkeamos hacia los detalles del character y concatene el id */}
            <div className="card-body">
              <Link to={"/single/"+props.id} className="btn btn-primary">Go somewhere</Link>
              <button className="btn btn-danger" onClick={()=>{actions.agregarFavoritos(props.nombre); console.log(props.name);}}>Like</button>
            </div>

      </div>

    </div>
  );
};

export default Cards;