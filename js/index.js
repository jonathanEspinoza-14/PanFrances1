const opcionesPorProducto = {
    "Soda Italiana": ["Frambuesa", "Kiwi", "Mango", "Fresa"],
    "Agua de Sabor": ["Jamaica", "Fresa", "Limón", "Pepino Limón", "Horchata"]
};

function openModal(event, title, description, price, image) {
    // Evitamos el comportamiento predeterminado para evitar el desplazamiento
    event.preventDefault();
    
    // Bloqueamos el desplazamiento de la página
    document.body.style.overflow = "hidden";
    
    // Rellenamos el modal con la información
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-description").textContent = description;
    document.getElementById("modal-price").textContent = "$" + price.toFixed(2);
    document.getElementById("modal-image").src = image;

    const optionsContainer = document.getElementById("options-form-container");
    const form = document.getElementById("options-form");
    form.innerHTML = "";

    if (opcionesPorProducto[title]) {
        optionsContainer.style.display = "block";
        opcionesPorProducto[title].forEach(opcion => {
            const label = document.createElement("label");
            label.innerHTML = `<input type="checkbox" name="option" value="${opcion}"> ${opcion}<br>`;
            form.appendChild(label);
        });
    } else {
        optionsContainer.style.display = "none";
    }

    // Mostramos el modal
    document.getElementById("modal").style.display = "block";

    // Mantenemos la posición de la pantalla (sin desplazamiento)
    const scrollY = window.scrollY;
    document.getElementById("modal").style.top = `${scrollY}px`;
}

function closeModal() {
    // Cerramos el modal
    document.getElementById("modal").style.display = "none";
    
    // Restauramos el desplazamiento
    document.body.style.overflow = "auto";
}

function confirmSelection() {
    const form = document.getElementById("options-form");

    // Si no hay opciones visibles
    if (form.style.display === "none" || form.children.length === 0) {
        alert("Producto agregado al carrito sin opciones.");
        closeModal();
        return;
    }

    const selected = Array.from(document.querySelectorAll('#options-form input[type="checkbox"]:checked'));

    if (selected.length === 0) {
        alert("Por favor selecciona al menos una opción.");
        return;
    }

    const opcionesElegidas = selected.map(cb => cb.value);
    alert("Has agregado el producto con: " + opcionesElegidas.join(", "));
    closeModal();
}

function openModal(nombre, descripcion, precio, imagen) {
    document.getElementById("modalName").textContent = nombre;
    document.getElementById("modalDescription").textContent = descripcion;
    document.getElementById("modalPrice").textContent = "$" + precio.toFixed(2);
    document.getElementById("modalImage").src = imagen;

    document.getElementById("productModal").style.display = "block";
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
}

function openOptionsModal(nombre, descripcion, precio, imagen) {
    document.getElementById("modal-title").textContent = nombre;
    document.getElementById("modal-description").innerHTML = `
        <strong>${descripcion}</strong><br><br><strong>Precio: $${precio}</strong><br><br>Selecciona la opción:
    `;
    document.getElementById("modal-image").src = imagen;

    document.getElementById("optionsModal").style.display = "block";
}

function closeOptionsModal() {
    document.getElementById("optionsModal").style.display = "none";
}

/*cerveza*/
function openModal(nombre, descripcion, opcionesConPrecios, imagen) {
    document.getElementById("modal-title").textContent = nombre;
    document.getElementById("modal-description").innerHTML = `<strong>${descripcion}</strong>`;
    document.getElementById("modal-image").src = imagen;

    // Construir las opciones con precios
    const form = document.getElementById("options-form");
    form.innerHTML = ""; // Limpiar opciones anteriores

    for (const [opcion, precio] of Object.entries(opcionesConPrecios)) {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="option" value="${opcion}"> ${opcion} - $${precio}`;
        form.appendChild(label);
        form.appendChild(document.createElement("br"));
    }

    document.getElementById("optionsModal").style.display = "block";
}
