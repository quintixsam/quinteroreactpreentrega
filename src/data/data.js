const products = [
    {
        id:"RM152",
        name: "Camiseta Real Madrid",
        description: "Camiseta Local Real Madrid 2024, la prenda oficial para la temporada, con el clásico blanco y detalles elegantes. Ideal para competiciones y diseñada para máximo confort y estilo.",
        stock: 10,
        price: 600,
        image: "/img/camisetamadrid.jpg",
        category: "Camisetas",
    },
    {
        id:"FCF100",
        name: "Camiseta Seleccion Colombia",
        description: "Camiseta Local Selección Colombia 2024, Camiseta oficial de la Federación Colombiana de Fútbol para competiciones internacionales y nacionales. Diseñada con tecnología avanzada para un rendimiento óptimo, esta camiseta combina comodidad y estilo en cada detalle. Lleva los colores emblemáticos de la selección, la misma piel que llevan los jugadores.",
        stock: 10,
        price: 600,
        image: "/img/camisetacolombia.jpeg",
        category: "Camisetas",
    },
    {
        id:"Gta504",
        name: "Espinilleras Verdes",
        description: "Eleva tu juego con las espinilleras adidas verdes. Fabricadas con materiales de alta calidad, ofrecen una protección superior sin sacrificar la movilidad. Su diseño ergonómico y su ajuste perfecto te brindan la confianza que necesitas para darlo todo en la cancha.",
        stock: 8,
        price: 160,
        image: "/img/espinilleras.jpg",
        category: "espinilleras",
    },
    {
        id:"Gta643",
        name: "Espinilleras Azules",
        description: "Espinilleras Nike azules: Protección y estilo en cada partido. Diseñadas para un ajuste cómodo y seguro, perfectas para entrenamientos y competiciones.",
        stock: 8,
        price: 160,
        image: "/img/espinillerasnike.jpg",
        category: "espinilleras",
    },
    {
        id:"Pred50",
        name: "Botines Adidas Predator",
        description: " Los botines de fútbol adidas Predator son la elección perfecta para ser el mejor, Con su diseño innovador y su tecnología de vanguardia, estos botines te brindan la ventaja que necesitas para llevar tu juego al siguiente nivel.",
        stock: 20,
        price: 700,
        image: "/img/botines.jpg",
        category: "Botines",
    },
    {
        id:"F50",
        name: "Botines Adidas F50",
        description: "Los Adidas F50 son la elección perfecta para los jugadores que buscan una velocidad y agilidad inigualables. Con su diseño ligero y aerodinámico, estos botines te permiten moverte con rapidez y facilidad en el campo.",
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