const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            //const [personajes, setPersonajes]=useState([])
            favorites: [],
            mensaje: "",
            personajes: [],
            personaje: {},
            planetas: [],
            vehiculos: [],
            detallePeople: {},
            detallePlanet: {},
            detalleVehicle: {},

        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            //             function obtenerInfoPersonajes() {
            //                 fetch("https://www.swapi.tech/api/people/")
            //                 .then(res => res.json())
            //                 .then(data => setPersonajes(data.results))
            //                 .catch(err => console.error(err))
            // }
            //fetch de la vista home, para obtener la info de todos los pj
            obtenerInfoPersonajes: () => {
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
                fetch("https://www.swapi.tech/api/people/") //traemos info de personajes
                    .then(res => res.json())
                    // .then(data => console.log(data.results));
                    .then(data => setStore({
                        personajes: data.results
                    }))
                    .catch(err => console.error(err))
            },

            //fetch de la vista single, para obtener info de un pj
            getInfoDePj: () => {
                // https://www.swapi.tech/api/people/
                fetch("https://www.swapi.tech/api/people/")
                    .then(res => res.json())
                    .then(data => setInfoPersonaje(data.result)) //es result porque hace referencia a solo 1 personaje
                    .catch(err => console.error(err))
            },



            // agregarFavoritos: (personaje) => {
            //     const store = getStore();
            //     const favorites = [...store.favorites];
            //     let mensaje = "";

            //     // Busca el índice del personaje en la lista de favoritos
            //     console.log(personaje);
            //     const index = favorites.findIndex((fav) => fav?.name === personaje?.name);

            //     // Si el personaje ya está en la lista, lo eliminamos
            //     if (index !== -1) {
            //         favorites.splice(index, 1);
            //         mensaje = `${personaje?.name} fue eliminado de la lista de favoritos.`;
            //     } else {
            //         favorites.push(personaje);
            //         mensaje = `${personaje?.name} se agregó a la lista de favoritos.`;
            //     }

            //     setStore({
            //         favorites,
            //         mensaje,
            //     });
            // },

            agregarFavoritos: (index, value) => {
                console.log(index, value);
				const store = getStore();
				const actions = getActions();
				let valueExist, valueIndex;
				for (let i = 0; i < store.favorites.length; i++) {
					if(store.favorites[i].id == index){
						valueExist = true
						valueIndex = i;
					}
				}
				if (valueExist === true) {
					actions.borrarFavorito(valueIndex)
				} else {
					setStore({favorites: [...store.favorites, {id: index, label: value}]})
				}
            },

            // borrarFavorito: (personaje) => {
            //     const store = getStore();
            //     const favorites = [...store.favorites];
            //     const index = favorites.findIndex((fav) => fav?.name === personaje?.name);
            //     if (index !== -1) {
            //         favorites.splice(index, 1);
            //         setStore({
            //             favorites,
            //             mensaje: `${personaje?.name} fue eliminado de la lista de favoritos.`,
            //         });
            //     }
            // },

            borrarFavorito: (index) => {
				const store = getStore();
				setStore({favorites: [
					...store.favorites.slice(0, index),
					...store.favorites.slice(index + 1, store.favorites.length)
					]})
            },



            changeColor: (item) => {
                let store = getStore()
                if (store.favorites.includes(item)) {
                    return "fa fa-heart text-danger fs-4";
                } else {
                    return "far fa-heart text-danger fs-4"
                }
            },

            changeOpacity: (item) => {
                let store = getStore()
                if (store.favorites.includes(item)) {
                    return "opacity-100";
                } else {
                    return ""
                }
            }
            // changeColor: (index, color) => {
            //     //get the store
            //     const store = getStore();

            // //     //we have to loop the entire demo array to look for the respective index
            // //     //and change its color
            //     const demo = store.demo.map((elm, i) => {
            //         if (i === index) elm.background = color;
            //         return elm;
            //     });

            // //     //reset the global store
            //     // setStore({
            //     //     demo: demo
            //     // });
            // }
        }
    };
}
export default getState;