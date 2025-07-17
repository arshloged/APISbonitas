const URL = "https://mocki.io/v1/7eee7ad2-585f-4e1e-af1a-360d41f8f248";

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