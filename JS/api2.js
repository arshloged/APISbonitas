const URL = "https://fakestoreapi.com/users";

async function consumirDatos() {
    const ubicacion = document.getElementById("verDatos");

    

    try {
        const resultado = await fetch(URL);
        
        const convertir = await resultado.json();

       
        const dieznamas = convertir.slice(0, 10);

        const table = document.createElement("table");
        table.className = "table";
        table.innerHTML = `
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Usuario</th>
                    <th>City</th>
                    <th>Telefono</th>
                </tr>
            </thead>
            <tbody>
                ${dieznamas
                    .map(
                        (producto) => `
                        <tr>
                            <td>${producto.id}</td>
                            <td>${producto.username}</td>
                            <td>${producto.address.city}</td>
                            <td>${producto.phone}</td>
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