const URL = "https://dummyjson.com/products";

async function consumirDatos() {
    const ubicacion = document.getElementById("verDatos");

    

    try {
        const resultado = await fetch(URL);
        
        const convertir = await resultado.json();

       
        const todo = convertir.products;

        const table = document.createElement("table");
        table.className = "table";
        table.innerHTML = `
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                ${todo
                    .map(
                        (producto) => `
                        <tr>
                            <td>${producto.id}</td>
                            <td>${producto.title}</td>
                            <td>${producto.price}</td>
                            <td>${producto.rating}</td>
                        </tr>
                    `
                    )
                    .join("")}
            </tbody>
        `;

        ubicacion.appendChild(table);
    } catch (error) {
        console.error("Tremendo error mira:", error);
        
    }
}

consumirDatos();