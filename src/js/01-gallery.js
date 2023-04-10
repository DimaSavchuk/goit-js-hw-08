// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryImg = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img 
        class="gallery__image" 
        src="${preview}" 
        alt="${description}" 
        />
    </a>
 </li>
    `
});

galleryImg.insertAdjacentHTML('beforeend', markup.join(''));


const modalImg = new SimpleLightbox('.gallery a', {
    captionSelector: 'img',
    alertErrorMessage: 'Image not found, next image will be loaded',
    captionsData: 'alt',
    captionDelay: 250,
});