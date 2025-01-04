let content = document.querySelector('.content');
let addButton = content.querySelector('.form__button-save')


// Seleccionar elementos del DOM
const editButton = document.querySelector('.content-profile__info-editButtom');
const formContainer = document.querySelector('.form');
const closeButton = document.querySelector('.form__button-close');


// Función para mostrar el formulario
editButton.addEventListener('click', () => {
    console.log("OK clickado");
    formContainer.style.display = 'block'; // Mostrar el formulario
});

// Función para cerrar el formulario
closeButton.addEventListener('click', () => {
    formContainer.style.display = 'none'; // Ocultar el formulario
});


window.onload = function() {
    // Obtener los valores actuales del HTML
    let name = document.getElementById('currentName').textContent;
    let about = document.getElementById('currentAbout').textContent;

      // Cargar esos valores en los campos del formulario
      document.getElementById('name').value = name;
      document.getElementById('about').value = about;
    };

    // Evento para manejar el envío del formulario
    function submitNewInformation(event){
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
  
        // Obtener los datos editados del formulario
        let editedName = document.getElementById('name').value;
        let editedAbout = document.getElementById('about').value;
  
        // Mostrar los datos editados en el HTML (puedes hacer lo que necesites con estos datos)
        document.getElementById('currentName').textContent = editedName;
        document.getElementById('currentAbout').textContent = editedAbout;

        console.log(editedName);
        console.log(editedAbout);

      };


      addButton.addEventListener('click', (event) => {
        submitNewInformation(event);
        formContainer.style.display = 'none';
    });




