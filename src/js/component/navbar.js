import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


export const Navbar = () => {
	// console.log(store.favorite);
	const {store, actions}=useContext(Context);

	// const [contadorLikes, setContadorLikes] = useState("")
	
	// console.log(store.favorites);

	// function contarLikes() {
    //     setContadorLikes(store.likesGuardados?.length)
    // }


	// useEffect(() => {
    //     contarLikes()
    // }, [store.likesGuardados])


console.log(store.favorites);
	return (
		<nav className="navbar navbar-dark bg-black" >
			<Link to="/" style={{marginBot: "15px"}}>
				<img src="https://img.icons8.com/color/144/null/star-wars.png" style={{width:"90px", marginLeft: "20px"}} alt="" />
			</Link>
				<div className="ml-auto" style={{marginBot: "15px"}}>	
					<div className="btn-group">
<div>

	<button type="button" className="btn btn-light dropdown-toggle" style={{marginRight: "20px"}} data-bs-toggle="dropdown" aria-expanded="false">
		<span className="fas fa-star" style={{marginRight: "5px"}}>Favorites<div className="badge bg-secondary text-wrap">{store.favorites.length}</div></span>
		{/* <span className="text-danger">
			{
				" " + contadorLikes
			}
		</span> */}
	</button>

	<ul className="dropdown-menu text-dark" >
	{store.favorites && store.favorites.length > 0 ? store.favorites.map((item, id) => <li className="dropdown-item float-start btnEliminar" key={id}>{item.label}<button type="button" className="btn border-0 float-end"  onClick={() => actions.borrarFavorito(id)}><i className="fa fa-trash"></i></button> </li>
	
	):
	<li className="text-center">Vacio</li>
	}
	
	</ul>

</div>


						<ul className="dropdown-menu dropdown-menu-end">
							
						{store.favorites.map((element, index) =><li key={index} ><button className="dropdown-item" type="button" key={index}>{element.label} </button></li>)}
							
						</ul>
					</div>
			</div>
		</nav>
	);
};


