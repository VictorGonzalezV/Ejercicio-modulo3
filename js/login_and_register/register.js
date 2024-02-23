import { URL_COMPANIES } from "../api/urls.js"

const formRegister = document.querySelector("#formRegister")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const company = document.querySelector("#company")
const imgCompany = document.querySelector("#img-company")
const nitCompany = document.querySelector("#nit")



formRegister.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nombre = company.value;
  const correo = email.value;
  const contraseña = password.value;
  const imagenCompañia = imgCompany.value;
  const nit = nitCompany.value

  // Expresión regular para validar el formato de un correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Verificar si el correo electrónico tiene el formato correcto
  if (!emailRegex.test(correo)) {
      return alert('Por favor ingresa un correo electrónico válido');
  }

  try {
      // Realizar una solicitud GET para obtener todos los usuarios
      const response = await fetch(URL_COMPANIES);
      const usuarios = await response.json();

      // Verificar si el correo electrónico ya está registrado
      const isUserRegistered = usuarios.find(user => user.email === correo);
      const isNitRegistered = usuarios.find(user => user.nit === nit);
      if (isUserRegistered) {
          return alert('El correo electrónico ya está registrado');
      }
      if (isNitRegistered) {
        return alert('El nit ya está registrado');
        }
      

      // Crear un objeto con los datos del nuevo usuario
      const newUser = {
          nameCompany: nombre,
          email: correo,
          password: contraseña,
          imageCompany:imagenCompañia,
          nit:nit
      };

      // Realizar una solicitud POST para enviar los datos del nuevo usuario al servidor JSON
      const responseRegistro = await fetch(URL_COMPANIES, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
      });

      if (responseRegistro.ok) {
          // Registro exitoso, redireccionar al inicio de sesión
          alert('Registro exitoso!');
          window.location.href = 'index.html';
      } else {
          // Si hay un error, mostrar mensaje de error
          alert('Error al registrar el usuario');
      }
  } catch (error) {
      console.error('Error:', error);
      alert('Error al comunicarse con el servidor');
  }
});