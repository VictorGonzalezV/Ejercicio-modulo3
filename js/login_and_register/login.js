import { URL_COMPANIES } from "../api/urls.js";

const formLogin= document.querySelector('#formLogin');
formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    try {
        // Realizar una solicitud GET a JSON Server para obtener los usuarios
        const response = await fetch(URL_COMPANIES);
        const usuarios = await response.json();

        // Buscar un usuario con el correo y contraseña proporcionados
        const validUser = usuarios.find(user => user.email === email && user.password === password);
        if (!validUser) {
            return alert('Usuario y/o contraseña incorrectos!');
        }else {
            window.location.href = 'administrator.html'
        }

        // Guardar los datos del usuario en localStorage
        localStorage.setItem('login_success', JSON.stringify(validUser));

    } catch (error) {
        console.error('Error:', error);
        alert('Error al comunicarse con el servidor');
    }
});