//personajes, planetas y vehiculos. Entendida la API swap puedo hacer fetch
import React, {useEffect, useState, useContext} from "react";//1. llamar al hook useContext
import "../../styles/home.css";
import Cards from "../component/cards.js"
import {Context} from "../store/appContext.js"//2. importo el contexto

export const Home = () => {

	const {store}=useContext(Context); //3. Activo el uso del contexto y desestructuro las o la propiedades que quiero utilizar. Para verificar hacemos console.log()
	// console.log(store.demo);
 	// const [personajes, setPersonajes]=useState([])	
	
	//guardar el fetch dentro de una funcion

	//function obtenerInfoPersonajes() {
	//fetch("https://www.swapi.tech/api/people/")
	//.then(res => res.json())
	//.then(data => setPersonajes(data.results))
	//.catch(err => console.error(err))
	// }

	// useEffect(()=>{
	// 	obtenerInfoPersonajes();
	// },[])

	// array.map()
	// console.log(store.personajes);

	//todo lo que se renderiza se coloca en return
	console.log(store.personajes);
	return(
	<>
<div className="container-fluid" style={{backgroundColor: 'black', backgroundImage: "url('https://wallpapercave.com/wp/wp9267865.jpg')", backgroundSize: "cover"}}>
  <div className="container mx-auto overflow-auto">
	<div className="d-flex flex-row flex-nowrap">
    {store.personajes.map((item, index) => (
      <div className="card mx-2 mb-4" style={{backgroundColor: "transparent", minWidth: "18rem"}} key={index}>
        <Cards name={item.name} id={index + 1} />
      </div>
    ))}
	</div>
  </div>
</div>
	</>
);}