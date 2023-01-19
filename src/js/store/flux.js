const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            //const [personajes, setPersonajes]=useState([])
            personajes: [],
            favorite: []

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
                    .then(data => setStore({personajes: data.results}))
                    .catch(err => console.error(err)) 
            },
            
            //fetch de la vista single, para obtener info de un pj
            getInfoDePj: () => { 
                // https://www.swapi.tech/api/people/
                fetch("https://www.swapi.tech/api/people/")
                .then(res => res.json())
                .then(data => setInfoPersonaje(data.result))//es result porque hace referencia a solo 1 personaje
                .catch(err => console.error(err))
            }

            

            // agregarFavorito: (name) => {
            // console.log(name),
            // const store = getStore():
            // setStore({
            //     favorites: [...store.favorites, name]
            // })

            // }
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

            //     //we have to loop the entire demo array to look for the respective index
            //     //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

            //     //reset the global store
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;