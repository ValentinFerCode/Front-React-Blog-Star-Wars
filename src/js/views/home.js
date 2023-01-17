//pj, planetas y vehiculos. Entendida la API swap puedo hacer fetch
import React, {useEffect, useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Cards from "../component/cards.js"

export const Home = () => {


 	const [personajes, setPersonajes]=useState([])	
	//guardar el fetch dentro de una funcion
	function obtenerInfoPersonajes() {
	fetch("https://www.swapi.tech/api/people/")
	.then(res => res.json())
	.then(data => setPersonajes(data.results))
	.catch(err => console.error(err))
}

	useEffect(()=>{
		obtenerInfoPersonajes();
	},[])
// array.map()
	console.log(personajes);

	//todo lo que se ve se coloca en return
	return(
	<>
	<Cards/>
	<div className="text-center mt-5">
		{personajes.map((props)=><Cards nombre={props.name} id={props.uid} key={props.uid}/>)}
	</div>
	</>
);}
