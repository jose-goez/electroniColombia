const btnAbrirMenu = document.getElementById("btnAbrirMenu");
const btnCerrarMenu = document.getElementById("btnCerrarMenu");
const menu = document.getElementById("nav");

btnAbrirMenu.addEventListener("click",()=>{
    menu.style.opacity="1";
    btnCerrarMenu.style.display="block";
    btnAbrirMenu.style.display="none";
});

btnCerrarMenu.addEventListener("click", ()=>{
    menu.style.opacity="0";
    btnCerrarMenu.style.display="none";
    btnAbrirMenu.style.display="block";
});

menu.addEventListener("click", ()=>{
    menu.style.opacity="0";
    btnCerrarMenu.style.display="none";
    btnAbrirMenu.style.display="block";
});

// ========================boton redes sociales===============
const boton = document.getElementById("boton");
const cerrar = document.getElementById("cerrar");
const menuSocial = document.getElementById("menuRedes");

boton.addEventListener("click", () => {
  menuSocial.style.display = "block";
  cerrar.style.display = "block";
  boton.style.display = "none";
});
cerrar.addEventListener("click", () => {
  menuSocial.style.display = "none";
  cerrar.style.display = "none";
  boton.style.display = "block";
});

menuSocial.addEventListener("click", () =>{
    menuSocial.style.display = "none";
    cerrar.style.display = "none";
    boton.style.display = "block";
});
