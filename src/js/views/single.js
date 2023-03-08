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
		<div className="jumbotron w-100 vh-100" style={{backgroundImage: "url('https://wallpapercave.com/wp/wp9267865.jpg')", backgroundSize: "cover"}}>	

			<div className="card mx-auto" style={{maxWidth: "800px"}}>
			
				<div className="row g-0">

					<div className="col">
						<img src={"https://starwars-visualguide.com/assets/img/characters/"+infoPersonaje.uid+".jpg"} className="img-fluid rounded-start w-100 h-100" alt="..."/>
					</div>

					<div className="col">
						<div className="card-body bg-light">
							<h5 className="card-title">{infoPersonaje.properties?.name}</h5>
							<p className="card-text">{infoPersonaje.description}</p>
							<p className="card-text"><small>Height: {infoPersonaje.properties?.height}cm</small></p>
							<p className="card-text"><small>Mass: {infoPersonaje.properties?.mass}kg</small></p>
							<p className="card-text"><small>Birth-Year: {infoPersonaje.properties?.birth_year}</small></p>
						</div>
					</div>
						<div class="text-danger border-bottom border-light"></div>	
				</div>


				</div>

				<div className="d-flex justify-content-center w-100 my-2">

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
