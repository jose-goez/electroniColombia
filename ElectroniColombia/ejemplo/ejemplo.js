document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const baseDeDatos = [
    {
      id: 1,
      nombre: "Televisor Full HD, con pantalla liquidad de ultima tecnología.",
      imagen:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTK2E-4Kz68SDE2M7-_qbNF70QFdoYfwiWxvIR_aPu_JC6znjRqjXUbhm5cKWywWIwcLgs-z5uHsQ&usqp=CAc",
      color: "negro",
      si: "Envío gratis",
      divisa: "$",
      precio: 2599999,
    },
    {
      id: 2,
      nombre: "Televisor LCD de pantalla de más de 14 millones de colores.",
      imagen:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTYNXwrYNDZ4f140dIhHIeAJBJC0vIAe4UWKKzKUEAnuKMOWQavbxrm2kpBpCNSr2ZKZTJ9MlJRU6I&usqp=CAc",
      color: "negro",
      si: "Envío gratis",
      divisa: "$",
      precio: 2999999,
    },
    {
      id: 3,
      nombre: "Televisor ultra delgado de 55' 4K.",
      producto: "televisor Full HD",
      imagen:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSt9W-l_dQMwHofpB8OREbrN6ZITkXoxiVNlQiC7BGRFajsnnZGF2A7sq_Vhl_-C_EgKQ6ibZqrJA&usqp=CAc",
      color: "negro",
      si: "Envío gratis",
      divisa: "$",
      precio: 3000000,
    },
    {
      id: 4,
      nombre: "Televisor LG NANO con reconocimiento de voz.",
      imagen:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRaADFFYMJhiBmg2torB1dMzxMU32_m3JLBim2vddz7ae6Kh7AgUYCwaDOjkAwvW_GwPSwFBsvIwjY&usqp=CAc",
      color: "negro",
      si: "Envío gratis",
      divisa: "$",
      precio: 2500000,
    },
    {
      id: 5,
      nombre: "Televisor CHALLENGER con carcasa de aluminio.",
      imagen:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQZZNnjlRZBa_wIw-0kwgR3MDY2Sfp7GnpGkngqEJ0J2I-VFnJQg3Bok2qLHNz1skO3nxTme-MR9A&usqp=CAc",
      color: "graffito",
      si: "Envío gratis",
      divisa: "$",
      precio: 2300000,
    },
    {
      id: 6,
      nombre: "Televisor con inteligencia artificial.",
      imagen:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTLS0IB-PVBdR2t2a0pH2En3QT17ObsMDJh87Mj8H9xlIN33czAChhpV-y6Y_JawXfn_n3_lDtQPQ&usqp=CAc",
      color: "plateado",
      si: "Envío gratis",
      divisa: "$",
      precio: 1000000,
    },
    {
      id: 7,
      nombre: "Televisor Full 4K con desbloqueo facial.",
      imagen:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSNO62acGoiRDhDekdiirHGOicl01srmd5rJTShv80nojF4MR79KOoZmWj06DdOat_ViENjX9ctu0g&usqp=CAc",
      color: "graffito",
      si: "Envío gratis",
      divisa: "$",
      precio: 1200000,
    },
    {
      id: 8,
      nombre: "Televisor pantalla liquida + Obsequio.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRx-azt_F0qj_MHiFhxBidQf7hCpQZfIncGKRz-QGC1z1QQgBE8kmqKaU1BaYPMWya1KfVsb8V6Iyw&usqp=CAc",
      color: "negro",
      si: "Envío gratis",
      divisa: "$",
      precio: 3700000,
    },
    {
      id: 9,
      nombre: "televisor Full HD con pantalla liquida",
      imagen:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQnEFOlygdDmWf6zxNEGQOTlumRp0P4d47sdC-LaoQHX6I2Gr68ROlXSTDQ5GYefnFaMPo0ZV_Ccg&usqp=CAc",
      color: "negro",
      si: "Envío gratis",
      divisa: "$",
      precio: 1700000,
    },
    {
      id: 10,
      nombre: "nevera Haceb Siberia 240 litros...",
      imagen:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQLLd4C5uHJB8kRJK6KID6y3KpdlU5wrM1q9m41pU42f8AbZt-9npNX7BEoyCKWz1mrUpLoAPJokDRI&usqp=CAc",
      color: "plateada",
      si: "Envío gratis",
      divisa: "$",
      precio: 1500000,
    },
    {
      id: 11,
      nombre: "nevera SAMSUNG no frost",
      imagen:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTXbjo0zS6FMOTit1sxhwP32XFhoYB2tVdCJ1kxcTZxqVS-9fAqGeOhRT9uD_tQBNk0IQvJxHYTSxA&usqp=CAc",
      color: "plateada",
      si: "Envío gratis",
      divisa: "$",
      precio: 1100000,
    },
    {
      id: 12,
      nombre: "Licuadora Samurai",
      imagen:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR9JEL9b0vQpe2jTpDciTpUfmt-LG3yt2j9R1Hli4XG1H_vnT7fQ9cTyr4hWQZMhMpT28ZeWwDpYI9p&usqp=CAc",
      color: "negro",
      si: "Envío gratis",
      divisa: "$",
      precio: 70000,
    },
    {
      id: 13,
      nombre: "Licuadora Oster",
      imagen:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTWziB0HIT7LzyKGoJ_OfdEtbTBTCfKjoE0suvYS5MkUpav4f1yNo8J2V0tYZD85dw4hWPIHnB10Hg&usqp=CAc",
      color: "negro, plateado",
      si: "Envío gratis",
      divisa: "$",
      precio: 270000,
    },
    {
      id: 14,
      nombre: "Laptop HP",
      imagen:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTViHq427_-bnCbSxvoVOW0P8JkPMW5MQqgTmGep5fBzX3JnY4ekJy5UovozVtyHhSjfmo1WLe5Yw&usqp=CAc",
      color: "graffito",
      si: "Envío gratis",
      divisa: "$",
      precio: 800000,
    },
    {
      id: 15,
      nombre: "Laptop Acer",
      imagen:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSPNhPNNkVCD_u11larlHGt-Z5hldwWzXoe1XQaVlX_y4EBIZLb0Wn80jEmFP9Ybkp5blQOaZIh3-g&usqp=CAc",
      color: "blanco",
      si: "Envío gratis",
      divisa: "$",
      precio: 1000000,
    },
    {
      id: 16,
      nombre: "Laptop Lenovo",
      imagen:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRcmk0mGL7akDECEOwdiDZQZWYP4vXLPyNCM6dm0t1d0W7uEEnSR_istSr_RXBhmJ0B0TxHJF-OhZRa&usqp=CAc",
      color: "graffito",
      si: "Envío gratis",
      divisa: "$",
      precio: 900000,
    },
    {
      id: 17,
      nombre: "Xiami redmi 10",
      imagen:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQP125XHjDRF_TNEmMFNYYjfaCrQFFlDoAgcsJMEUi1Jzbo7-7tQ0mhQixFdh7MyKaeyueCwsZR3g&usqp=CAc",
      color: "negro",
      si: "Envío gratis",
      divisa: "$",
      precio: 900000,
    },
    {
      id: 18,
      nombre: "Samsung Galaxy A03",
      imagen:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRpg0tII5e7i8CuVNJ9SmRme2w0eU52-nk4YC4McHz2tz_iM8Gao5P5McVVFeTgog8ygPfyFWEbpQ&usqp=CAc",
      color: "negro",
      si: "Envío gratis",
      divisa: "$",
      precio: 900000,
    },
    {
      id: 19,
      nombre: "Lavadora automática",
      imagen:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS6zGfeTSvVAia4dBM1LYDS4lVCVDYys_GsDAEd35Xj2ks0h4I-A83s3iCBEobQqeDf-pedkFmtugg&usqp=CAc",
      color: "plateado",
      si: "Envío gratis",
      divisa: "$",
      precio: 900000,
    },
    {
      id: 20,
      nombre: "Lavadora Samsung",
      imagen:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTZju6yftqP-r0b7wWcqTVPCGg4Szc-iLCpfrq2Wl4RFt1ya_VYb1NgVsomBkE0SiG5w78UsNdl52nJ&usqp=CAc",
      color: "graffito",
      si: "Envío gratis",
      divisa: "$",
      precio: 2400000,
    },
    {
      id: 21,
      nombre: "Billetera de cuero de hombre.",
      imagen:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR7eOIR-6VF14vRsSzhThpBpa-TxueIdwBV0Ik-iZFdG6czZXdnzdfSnKcPkB1h7SRofgnvZVeRIQ&usqp=CAc",
      color: "marrón",
      si: "Envío gratis",
      divisa: "$",
      precio: 90000,
    },
    {
      id: 22,
      nombre: "Armario 6 puertas en mdf.",
      imagen:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ2rL6yJ15QuVKuyfO0bNeN29nHyNdVFR0g9UwzmY8CIprOHEnvISelwq-v2FehQffW6afDbnZWB30&usqp=CAc",
      color: "negro",
      si: "Envío gratis",
      divisa: "$",
      precio: 450000,
    },
    {
      id: 23,
      nombre: "Aire acondicionado, Aire fresh",
      imagen:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRhKH_UZKrFRS4Nh525aXflN9u7XeMC2i787WAgsXWE6-2dXL8_qyQ-lWDVyCBiy37cwNzt7qc3AFA&usqp=CAc",
      color: "blanco",
      si: "Envío gratis",
      divisa: "$",
      precio: 910000,
    },
    {
      id: 24,
      nombre: "Ventilador Samurai Turbo",
      imagen:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTRaZlyp_d6QSdgsZ4otyK6QBMsLZtRSVroPSb4znbnVoallpA6g3TnRh89P8gBntxCVD6OIryRbB0&usqp=CAc",
      color: "negro",
      si: "Envío gratis",
      divisa: "$",
      precio: 200000,
    },
    {
      id: 25,
      nombre: "Reloj deportivo hombre",
      imagen:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRxsDfwR5cY2V-RlEdfc3Fkjy-R_i9U8go3MEMbz4b12oSCq2OibC0lkD0x1IFOL3KSGH4-jIX2Fwo&usqp=CAc",
      color: "negro",
      si: "Envío gratis",
      divisa: "$",
      precio: 55000,
    },
    {
      id: 26,
      nombre: "Reloj Casio hombre, multifunctional",
      imagen:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQOTAis-_oVj3-sKzyC6upqBxPFdY4_slsCTnbKpqX-w-ITheRkVsdKMbRAme6_HgS0DBlEpxJIGpM&usqp=CAc",
      color: "negro, plateado",
      si: "Envío gratis",
      divisa: "$",
      precio: 155000,
    },
    {
      id: 27,
      nombre: "Tablet Krono 7031, Android con 16gb",
      imagen:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSXwqBLJKFJii01wIGPdEkLpxqYbvTatVUr6oxuV67ievqiXIvYKp7FRVRRXrRysaPANj-TLQLuoy8&usqp=CAc",
      color: "azul",
      si: "Envío gratis",
      divisa: "$",
      precio: 270000,
    },
    {
      id: 28,
      nombre: "Teclado LOGITECH Master serie MX Keys",
      imagen:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTfc_7YNOoETJs4_yGrDgkAPnL9OeJOSeqYdf3eyNmR9HfcyU9Shqta5ZM5RHWfFMLN8MrCYC3_knI&usqp=CAc",
      color: "graffito",
      si: "Envío gratis",
      divisa: "$",
      precio: 500000,
    },
    {
      id: 29,
      nombre: "Mouse LOGITECH Master serie MX Keys",
      imagen:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQwra0Gx0BlpoTopookc22K8rUN_v_5zf_4_pMAxDQnhQrtH2qvEcwnVY2dQatOPc0Riq4V6sC_wwE&usqp=CAc",
      color: "graffito",
      si: "Envío gratis",
      divisa: "$",
      precio: 511000,
    },
    {
      id: 30,
      nombre: "Silla Gamer Pro, Colores Negro y Rojo, escritorio",
      imagen:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS9VulTfAimIS2XW9HlfWn06LV3t2XzhThm-CrxzywDDx82X4ij9OFws3sqMWRIv-HEGyvCQvJzHQ&usqp=CAc",
      color: "negro, rojo",
      si: "Envío gratis",
      divisa: "$",
      precio: 709000,
    },
  ];

  let carrito = [];
  const divisa = "$";
  const DOMitems = document.querySelector("#items");
  const DOMcarrito = document.querySelector("#carrito");
  var DOMtotal = document.querySelector("#total");
  const DOMbotonVaciar = document.querySelector("#boton-vaciar");
  const miLocalStorage = window.localStorage;

  // Funciones

  /**
   * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
   */
  function renderizarProductos() {
    baseDeDatos.forEach((info) => {
      // Estructura
      const miNodo = document.createElement("div");
      miNodo.classList.add("card", "col-sm-4");
      // Body
      const miNodoCardBody = document.createElement("div");
      miNodoCardBody.classList.add("card-body");
      // Titulo
      const miNodoTitle = document.createElement("h5");
      miNodoTitle.classList.add("card-title");
      miNodoTitle.textContent = info.nombre;
      // Imagen
      const miNodoImagen = document.createElement("img");
      miNodoImagen.classList.add("img-fluid");
      miNodoImagen.setAttribute("src", info.imagen);
      //line
      const miNodoLine = document.createElement("hr");
      miNodoLine.classList.add("hr");
      // Precio
      const miNodoPrecio = document.createElement("h3");
      miNodoPrecio.classList.add("card-text");
      miNodoPrecio.textContent = `${divisa}${info.precio}`;
      //envíos gratis
      const miNodogratis = document.createElement("h6");
      miNodogratis.classList.add("envioGratis");
      miNodogratis.textContent = info.si;
      //color
      const miNodoColor = document.createElement("h6");
      miNodoColor.classList.add("color");
      miNodoColor.textContent = "color " + info.color;
      // boton ver
      const miNodoBotonVer = document.createElement("button");
      miNodoBotonVer.classList.add("btnVer");
      miNodoBotonVer.textContent = "ver";
      // Boton agregar
      const miNodoBoton = document.createElement("button");
      miNodoBoton.classList.add("btn", "btn-primary");
      miNodoBoton.textContent = "Agregar al carrito";
      miNodoBoton.setAttribute("marcador", info.id);
      miNodoBoton.addEventListener("click", anyadirProductoAlCarrito);
      // Insertamos
      miNodoCardBody.appendChild(miNodoImagen);
      miNodoCardBody.appendChild(miNodoLine);
      miNodoCardBody.appendChild(miNodoTitle);
      miNodoCardBody.appendChild(miNodoColor);
      miNodoCardBody.appendChild(miNodoPrecio);
      miNodoCardBody.appendChild(miNodogratis);
      miNodoCardBody.appendChild(miNodoBoton);
      miNodoCardBody.appendChild(miNodoBotonVer);
      miNodo.appendChild(miNodoCardBody);
      DOMitems.appendChild(miNodo);

      miNodoBoton.addEventListener("click", () => {
        alert("Estas agregando " + info.nombre + " al carrito!");
      });

      const ver = document.getElementById("ver");
      const volverAtras = document.getElementById("volverAtras");


      miNodoBotonVer.addEventListener("click", ()=>{
        volverAtras.style.display="block";
         ver.appendChild(miNodo);
         miNodoBotonVer.style.display="none";
         DOMitems.style.display="none";
      });

      volverAtras.addEventListener("click", ()=>{
        DOMitems.appendChild(miNodo);
        //  miNodoBotonVer.style.display="block";
         DOMitems.style.display="flex";
        volverAtras.style.display="none";

      })
    });
  }

  /**
   * Evento para añadir un producto al carrito de la compra
   */
  function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute("marcador"));
    // Actualizamos el carrito
    renderizarCarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();
  }

  /**
   * Dibuja todos los productos guardados en el carrito
   */
  function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = "";
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
      // Obtenemos el item que necesitamos de la variable base de datos
      const miItem = baseDeDatos.filter((itemBaseDatos) => {
        // ¿Coincide las id? Solo puede existir un caso
        return itemBaseDatos.id === parseInt(item);
      });
      // Cuenta el número de veces que se repite el producto
      const numeroUnidadesItem = carrito.reduce((total, itemId) => {
        // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
        return itemId === item ? (total += 1) : total;
      }, 0);
      // Creamos el nodo del item del carrito
      const miNodo = document.createElement("li");
      miNodo.classList.add("list-group-item", "text-right", "mx-2");
      miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${divisa}${miItem[0].precio}`;
      // Boton de borrar
      const miBoton = document.createElement("button");
      miBoton.classList.add("btn", "btn-danger", "mx-5");
      miBoton.textContent = "X";
      miBoton.style.marginLeft = "1rem";
      miBoton.dataset.item = item;
      miBoton.addEventListener("click", borrarItemCarrito);
      // Mezclamos nodos
      miNodo.appendChild(miBoton);
      DOMcarrito.appendChild(miNodo);
    });

    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
  }

  /**
   * Evento para borrar un elemento del carrito
   */
  function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
      return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();
  }

  /**
   * Calcula el precio total teniendo en cuenta los productos repetidos
   */

  function calcularTotal() {
    // Recorremos el array del carrito
    return carrito
      .reduce((total, item) => {
        // De cada elemento obtenemos su precio
        var miItem = baseDeDatos.filter((itemBaseDatos) => {
          return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        var totalTodo = total + miItem[0].precio;
        return totalTodo;
      }, 0)
      .toFixed(2);
  }

  /**
   * Varia el carrito y vuelve a dibujarlo
   */
  function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
    // Borra LocalStorage
    localStorage.clear();
  }

  function guardarCarritoEnLocalStorage() {
    miLocalStorage.setItem("carrito", JSON.stringify(carrito));
  }

  function cargarCarritoDeLocalStorage() {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (miLocalStorage.getItem("carrito") !== null) {
      // Carga la información
      carrito = JSON.parse(miLocalStorage.getItem("carrito"));
    }
  }

  // Eventos
  DOMbotonVaciar.addEventListener("click", vaciarCarrito);

  // Inicio
  cargarCarritoDeLocalStorage();
  renderizarProductos();
  renderizarCarrito();
  //   ======================boton carrito de compras=================
  const btnHeader = document.querySelector(".btnHeader");
  const aside = document.querySelector("aside");
  const x = document.querySelector(".x");

  btnHeader.addEventListener("click", () => {
    aside.style.display = "block";
    btnHeader.style.display = "none";
    x.style.display = "block";
  });
  x.addEventListener("click", () => {
    aside.style.display = "none";
    btnHeader.style.display = "block";
    x.style.display = "none";
  });

  // =====================boton paypal==========================

  paypal
    .Buttons({
      // Sets up the transaction when a payment button is clicked
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                currency: "USD",
                value: "40.77", // Can also reference a variable or function
              },
            },
          ],
        });
      },
      // Finalize the transaction after payer approval
      onApprove: (data, actions) => {
        return actions.order.capture().then(function (orderData) {
          // Successful capture! For dev/demo purposes:
          console.log(
            "Capture result",
            orderData,
            JSON.stringify(orderData, null, 2)
          );
          const transaction = orderData.purchase_units[0].payments.captures[0];
          alert(
            `Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`
          );
          // When ready to go live, remove the alert and show a success message within this page. For example:
          // const element = document.getElementById('paypal-button-container');
          // element.innerHTML = '<h3>Thank you for your payment!</h3>';
          // Or go to another URL:  actions.redirect('thank_you.html');
        });
      },
    })
    .render("#paypal-button-container");
});
