const products = [
    {
        id:"RM152",
        name: "Camiseta Real Madrid",
        description: "",
        stock: 10,
        price: 600,
        image: "/img/camisetamadrid.jpg",
        category: "Camisetas",
    },
    {
        id:"FCF100",
        name: "Camiseta Seleccion Colombia",
        description: "",
        stock: 10,
        price: 600,
        image: "/img/camisetacolombia.jpeg",
        category: "Camisetas",
    },
    {
        id:"Gta504",
        name: "Espinilleras Verdes",
        description: "",
        stock: 8,
        price: 160,
        image: "/img/espinilleras.jpg",
        category: "espinilleras",
    },
    {
        id:"Gta643",
        name: "Espinilleras Azules",
        description: "",
        stock: 8,
        price: 160,
        image: "/img/espinillerasnike.jpg",
        category: "espinilleras",
    },
    {
        id:"Pred50",
        name: "Botines Adidas Predator",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quaerat voluptatem repellat sed atque velit nihil, possimus eos eligendi ad blanditiis consectetur libero, vero quis et impedit architecto! Rerum, adipisci?",
        stock: 20,
        price: 700,
        image: "/img/botines.jpg",
        category: "Botines",
    },
    {
        id:"F50",
        name: "Botines Adidas F50",
        description: "",
        stock: 20,
        price: 700,
        image: "/img/botasf50.jpg",
        category: "Botines",
    },
]
    /*
    const promesa = new Promise( (resolve, reject)=>{
        if(condicion){
            resolve("se resolvio")
        }else{
            reject("se rechazo la promesa")
        }
    } )
    */

//obtener productos
const getProducts = () => {
    return new Promise((resolve, reject)=> {
        setTimeout( ()=> {
            resolve(products)
        }, 2000)
    })
}

export { getProducts }