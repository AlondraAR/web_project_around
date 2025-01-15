let content = document.querySelector('.content');
let addButton = content.querySelector('.form__button-save')


// Seleccionar elementos del DOM
const editButton = document.querySelector('.content-profile__info-editButtom');
const formContainer = document.querySelector('.form');
const closeButton = document.querySelector('.form__button-close');
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];
const photoContainer = document.querySelector('.content-photos');

initialCards.forEach(function addInitialPhoto(item) {

    const photoTemplate = document.querySelector("#photo-template").content;
    const photoElement = photoTemplate.querySelector('.content-photos__photo-description').cloneNode(true);
  
    photoElement.querySelector(".content-photos__description").textContent = item.name;
    photoElement.querySelector(".content-photos__photo").src = item.link;
  console.log(item.name);
  console.log(item.link);
    photoElement.querySelector('.content-photos__button-like').addEventListener("click", function (evt) {
      evt.target.classList.toggle("content-photos__button-like_active");
      });
    
    photoContainer.append(photoElement);
    
  });


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

    function addPhoto(photoTitleValue, photoUrlValue) {
      const photoTemplate = document.querySelector("#photo-template").content;
      const photoElement = photoTemplate.querySelector('.content-photos__photo-description').cloneNode(true);
    
      photoElement.querySelector(".content-photos__description").textContent = photoTitleValue;
      photoElement.querySelector(".content-photos__photo").textContent = photoUrlValue;
    
      photoElement.querySelector('.content-photos__button-like').addEventListener("click", function (evt) {
        evt.target.classList.toggle("content-photos__button-like_active");
        });
      
      photoContainer.append(photoElement);
      
    }


