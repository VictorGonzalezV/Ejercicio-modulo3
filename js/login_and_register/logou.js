document.addEventListener("DOMContentLoaded", () => {
    // Obtener la información del usuario desde localStorage
    const userData = JSON.parse(localStorage.getItem("login_success"));
  
    // Verificar si el usuario está autenticado
    if (userData) {
      // Agregar un listener al botón de cerrar sesión
      const logoutButton = document.querySelector("#logoutButton");
      logoutButton.addEventListener("click", () => {
        // Eliminar la información de inicio de sesión del localStorage
        localStorage.removeItem("login_success");
        // Redirigir al usuario al inicio de sesión
        window.location.href = "index.html";
      });
    } else {
      // Si el usuario no está autenticado, redirigir al inicio de sesión
      window.location.href = "index.html";
    }
  });