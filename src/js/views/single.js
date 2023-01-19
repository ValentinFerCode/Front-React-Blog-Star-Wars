import React, { useState, useEffect, useContext } from "react"; //1ro importar useContext
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext"; //2do importamos el contexto

export const Single = props => {
	const { store, actions } = useContext(Context); //3ro ejecutamos el hook useContext
	const params = useParams();
	console.log(store.demo);

	const [infoPersonaje, setInfoPersonaje]=useState({})
	
	//guardar el fetch dentro de una funcion
	function getInfoDePj() { 
		// https://www.swapi.tech/api/people/
		fetch("https://www.swapi.tech/api/people/"+params.theid)
		.then(res => res.json())
		.then(data => setInfoPersonaje(data.result))//es result porque hace referencia a solo 1 personaje
		.catch(err => console.error(err))
	}
	
		useEffect(()=>{
			getInfoDePj();
		},[])

		console.log(infoPersonaje);

	return (
		<div className="jumbotron">	

			<div className="card mb-3" style={{maxWidth: "540px"}}>
			
				<div className="row g-0">

					<div className="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/characters/"+props.id+".jpg"} className="img-fluid rounded-start" alt="..."/>
					</div>

					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{infoPersonaje.properties?.name}</h5>
							<p className="card-text">{infoPersonaje.description}</p>
							<p className="card-text"><small>Height: {infoPersonaje.properties?.height}cm</small></p>
							<p className="card-text"><small>Mass: {infoPersonaje.properties?.mass}kg</small></p>
							<p className="card-text"><small>Birth-Year: {infoPersonaje.properties?.birth_year}</small></p>
						</div>
					</div>
						<div class="h4 pb-2 mb-4 text-danger border-bottom border-light"></div>	
				</div>

				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>

				</div>

	    </div>






	);
};

Single.propTypes = {
	match: PropTypes.object
};
