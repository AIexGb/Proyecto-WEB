const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuToggle.classList.toggle("active"); //cambia el color del icono
});

if (location.pathname.endsWith('/')) {
    history.replaceState({}, '', location.pathname.slice(0, -1)); //quita el ultimo (/)
}


//comentario
