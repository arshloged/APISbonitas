const URL = "https://fakestoreapi.com/products";

async function consumirDatos() {
    const ubicacion = document.getElementById("verDatos");

 

    try {
        const resultado = await fetch(URL);
       
        const convertir = await resultado.json();

        convertir.forEach(producto => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
            <img src="${producto.image}" alt="${producto.name}">
            <h2>${producto.title}</h2>  
            <p>Precio: ${producto.price} Descripción: ${producto.description}</p>
            <p>Categoria: ${producto.category}</p>
            <p>Rating: ${producto.rating.rate}</p>
           
            
          `;

            ubicacion.appendChild(card);
            
        });
        
    } catch (error) {
        console.error("Error al obtener personajes:", error);
    }
}



consumirDatos();