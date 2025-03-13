const content = document.querySelector('.content');
let addButton = content.querySelector('.form__button-save')


// Seleccionar elementos del DOM
const editButton = document.querySelector('.content-profile__info-editButtom');
const formProfileContainer = document.querySelector('.formProfile');
const closeButton = document.querySelector('.form__button-close');
const closeButtonPhoto = document.querySelector('.form__button-closePhoto');
const addPhotoBottom = document.querySelector('.content-profile__add-buttom');
const formPhotoContainer = document.querySelector('.formPhoto');
const createPhotoBotton = document.querySelector('.form__button-savePhoto');

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

function addPhoto(name,link){

    const photoTemplate = document.querySelector("#photo-template").content;
    const photoElement = photoTemplate.querySelector('.content-photos__photo-description').cloneNode(true);

    photoElement.querySelector(".content-photos__description").textContent = name;
    photoElement.querySelector(".content-photos__photo").src = link;
    photoElement.querySelector(".content-photos__photo").alt = name;

    photoElement.querySelector('.content-photos__button-like').addEventListener("click", function (evt) {
      evt.target.classList.toggle("content-photos__button-like_active");
      });

      if (photoContainer) {
        // Agregar la nueva foto al principio
        photoContainer.prepend(photoElement);
    
        // Si el número de fotos en el contenedor supera 6, eliminar la última foto
        const photos = photoContainer.querySelectorAll('.content-photos__photo-description');
        if (photos.length > 6) {
          photoContainer.removeChild(photos[photos.length - 1]); // Elimina el último elemento
        }
      } else {
        console.log("No se encontró el contenedor de fotos");
      }
}

// Agregar las fotos iniciales
initialCards.forEach(function(item) {
addPhoto(item.name, item.link);
  
});

// Función para mostrar el formulario
editButton.addEventListener('click', () => {
    formProfileContainer.style.display = 'block'; // Mostrar el formulario
});

// Función para cerrar el formulario
closeButton.addEventListener('click', () => {
    formProfileContainer.style.display = 'none'; // Ocultar el formulario
});

// Mostrar el formulario para agregar foto
addPhotoBottom.addEventListener('click', () => {
  formPhotoContainer.style.display = 'block'; // Mostrar el formulario
});

// Cerrar formulario para agregar foto
closeButtonPhoto.addEventListener('click', () => {
  formPhotoContainer.style.display = 'none'; // Ocultar el formulario
});

// Evento para cargar los valores actuales en el formulario de perfil
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

      };

// Evento para guardar la información del perfil
      addButton.addEventListener('click', (event) => {
        submitNewInformation(event);
        formProfileContainer.style.display = 'none';
    });

  
    // Evento para agregar una nueva foto desde el formulario
    createPhotoBotton.addEventListener('click', (event) => {
      event.preventDefault();
      const photoTitleValue = document.getElementById('title').value;
      const photoUrlValue = document.getElementById('link').value;
      addPhoto(photoTitleValue, photoUrlValue);// Usar la misma función para agregar la nueva foto
      formPhotoContainer.style.display = 'none';
  });

  
  // Eliminar fotos
  const deleteButtons = document.querySelectorAll('.content-photos__deleteButton');
  deleteButtons.forEach(function(boton){
    boton.addEventListener('click',function() {
      const deleteElement = boton.parentElement;
      deleteElement.remove();
      }

    )
  });
  
  // Mostrar imagen en popup al hacer clic en una imagen
  document.querySelectorAll('.content-photos img').forEach(image => {
   image.onclick = () => {
   document.querySelector('.popup-image').style.display = 'block';
   document.querySelector('.popupimage').src = image.getAttribute('src');
   document.querySelector('.popup_description').textContent = image.getAttribute('alt');
   }
    });
    
    // Cerrar popup al hacer clic en la "x"
    document.querySelector('.popup-image span').onclick = () => { //funcion para cuando se de clic en la "x"
     document.querySelector('.popup-image').style.display = 'none'; //ocultamos el contenedor emergente
    }