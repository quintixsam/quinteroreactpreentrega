const products = [
    {
        id:"Df21",
        name: "camiseta roja",
        description: "",
        stock: 10,
        price: 2000,
        image: "/img/camisetamadrid.jpg",
        category: "Camisas",
    },
    {
        id:"Gta5",
        name: "espinillera azul",
        description: "",
        stock: 8,
        price: 1000,
        image: "/img/espinilleras.jpg",
        category: "espinilleras",
    },
    {
        id:"F50",
        name: "botines adidas",
        description: "",
        stock: 20,
        price: 4000,
        image: "/img/botines.jpg",
        category: "Botines",
    }
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

const getProducts = () => {
    return new Promise((resolve, reject)=> {
        setTimeout( ()=> {
            resolve(products)
        }, 2000)
    })
}

export { getProducts }