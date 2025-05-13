const pedidos = [
    {
      id: 1,
      mesa: 5,
      estado: "Recibido",
      platillos: ["Tacos", "Quesadilla", "Agua de Horchata"]
    },
    {
      id: 2,
      mesa: 3,
      estado: "En preparación",
      platillos: ["Hamburguesa", "Papas", "Refresco"]
    }
  ];
  
  const contenedor = document.getElementById('pedidos-container');
  
  function renderPedidos() {
    contenedor.innerHTML = '';
    pedidos.forEach(pedido => {
      const div = document.createElement('div');
      div.className = 'pedido';
      div.innerHTML = `
        <h2>Mesa ${pedido.mesa}</h2>
        <strong>Platillos:</strong>
        <ul>${pedido.platillos.map(p => `<li class="platillo">${p}</li>`).join('')}</ul>
        <div class="estado">
          <strong>Estado:</strong> ${pedido.estado}
          <br>
          <button class="btn-recibido" onclick="cambiarEstado(${pedido.id}, 'Recibido')">Recibido</button>
          <button class="btn-preparacion" onclick="cambiarEstado(${pedido.id}, 'En preparación')">En preparación</button>
          <button class="btn-listo" onclick="cambiarEstado(${pedido.id}, 'Listo para entregar')">Listo</button>
        </div>
      `;
      contenedor.appendChild(div);
    });
  }
  
  function cambiarEstado(id, nuevoEstado) {
    const pedido = pedidos.find(p => p.id === id);
    if (pedido) {
      pedido.estado = nuevoEstado;
      renderPedidos();
    }
  }
  
  renderPedidos();
  