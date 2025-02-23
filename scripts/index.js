let content = document.querySelector('.content');
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

initialCards.forEach(function addInitialPhoto(item) {

    const photoTemplate = document.querySelector("#photo-template").content;
    const photoElement = photoTemplate.querySelector('.content-photos__photo-description').cloneNode(true);
  
    photoElement.querySelector(".content-photos__description").textContent = item.name;
    photoElement.querySelector(".content-photos__photo").src = item.link;
    photoElement.querySelector(".content-photos__photo").alt = item.name;

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
    formProfileContainer.style.display = 'block'; // Mostrar el formulario
});

// Función para cerrar el formulario
closeButton.addEventListener('click', () => {
    formProfileContainer.style.display = 'none'; // Ocultar el formulario
});

addPhotoBottom.addEventListener('click', () => {
  console.log("OK clickado");
  formPhotoContainer.style.display = 'block'; // Mostrar el formulario
});
closeButtonPhoto.addEventListener('click', () => {
  formPhotoContainer.style.display = 'none'; // Ocultar el formulario
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
        formProfileContainer.style.display = 'none';
    });

    function addPhoto(event) {
      event.preventDefault();

      const photoTitleValue = document.getElementById('title').value;
      const photoUrlValue = document.getElementById('link').value;

      const photoTemplate = document.querySelector("#photo-template").content;
      const photoElement = photoTemplate.querySelector('.content-photos__photo-description').cloneNode(true);
    
      photoElement.querySelector(".content-photos__description").textContent = photoTitleValue;
      photoElement.querySelector(".content-photos__photo").src = photoUrlValue;
    
      photoElement.querySelector('.content-photos__button-like').addEventListener("click", function (evt) {
        evt.target.classList.toggle("content-photos__button-like_active");
        });

      photoContainer.prepend(photoElement);
      photoContainer.removeChild(photoContainer.lastElementChild);
    }

    createPhotoBotton.addEventListener('click', (event) => {
      addPhoto(event);
      formPhotoContainer.style.display = 'none';
  });

  const deleteButtons = document.querySelectorAll('.content-photos__deleteButton');
  deleteButtons.forEach(function(boton){
    boton.addEventListener('click',function() {
      console.log('ok click');
      const deleteElement = boton.parentElement;
      console.log(deleteElement);
      deleteElement.remove();
      }

    )
  });
  
  document.querySelectorAll('.content-photos img').forEach(image => {
   image.onclick = () => {
    console.log('Imagen clickeada')
   document.querySelector('.popup-image').style.display = 'block';
   document.querySelector('.popupimage').src = image.getAttribute('src');
   document.querySelector('.popup_description').textContent = image.getAttribute('alt');
   console.log(image.getAttribute('alt'));
   }
    });
    
    document.querySelector('.popup-image span').onclick = () => { //funcion para cuando se de clic en la "x"
     document.querySelector('.popup-image').style.display = 'none'; //ocultamos el contenedor emergente
    }