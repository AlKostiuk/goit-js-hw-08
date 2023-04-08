import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const galleryItemHolder = document.querySelector(".gallery");
function getGalleryMarkup(items) {
  const resultMarkup = items
    .map((item) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
         <img class="gallery__image" 
         src="${item.preview}" 
         alt="${item.description}" />
      </a>
   </li>`;
    })
    .join("");
  return resultMarkup;
}
const galleryMarkup = getGalleryMarkup(galleryItems);

galleryItemHolder.innerHTML = galleryMarkup;

new SimpleLightbox('.gallery__link', { captionsData : 'alt',captionDelay: 250});