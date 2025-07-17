const URL = "http://127.0.0.1:5501/JS/datos.js";

async function consumirDatos() {
    const ubicacion = document.getElementById("verDatos");

 

    try {
        const resultado = await fetch(URL);
       
        const convertir = await resultado.json();
        const todos = convertir.persons;

        todos.forEach(producto => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
            <img src="${producto.Imagen}" alt="${producto.Nombre}">
            <h2>${producto.DPI}</h2>  
            <p>Nombre: ${producto.Nombre} Apellido: ${producto.Apellido}</p>
            <p>Telefono: ${producto.Teléfono}</p>
            
           
           
          `;

            ubicacion.appendChild(card);
            
        });
        
    } catch (error) {
        console.error("Error al obtener personajes:", error);
    }
}



consumirDatos();