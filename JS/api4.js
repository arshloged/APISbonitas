const URL = "https://hp-api.onrender.com/api/characters";

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
            <h2>${producto.name}</h2>  
            <p>Genero: ${producto.gender} Especie: ${producto.species}</p>
            <p>Apodos: ${producto.alternate_names}</p>
            <p>Nacimiento: ${producto.dateOfBirth}</p>
           
           
          `;

            ubicacion.appendChild(card);
            
        });
        
    } catch (error) {
        console.error("Error al obtener personajes:", error);
    }
}



consumirDatos();