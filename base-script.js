/*-----GFX GALLERY-----*/
const galleryImg = document.getElementsByClassName('gallery__img');

import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe/dist/photoswipe-lightbox.esm.js';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#gfx-slide1',
  children: 'a',
  pswpModule: () => import('https://unpkg.com/photoswipe'),
});

lightbox.init();


lightbox.init();

const gallerySlides = document.getElementsByClassName('gfx_slide');
const gallerySlidesArr = Array.from(gallerySlides);
const galleryFigs = document.getElementsByClassName('gallery-fig');
const galleryFigsArr = Array.from(galleryFigs);
var list = galleryFigs.childNodes;


function hoverImg() {
    const hoverOL = document.createElement("div");
    hoverOL.classList.add("hoverOL");
    hoverOL.width = "100%";
    hoverOL.height = "100%";
    hoverOL.backgroundColor = "#365673";
    list.forEach(function(){
        gallergyFigs.appendChild(hoverOL);
    })
};