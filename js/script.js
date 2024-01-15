// creiamo la variabile

const thumbCont = document.querySelector("thumbs");
const itemsCont = document.querySelector("items");
let items = "";
let thumbs ="";

const images = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
];

// creiamo il ciclo for

for( let i = 0; i < images.length; i++){
  const image = images[i];
  items += `
        <div class="item">
             <img src=${image}>
        </div>
    `;

    thumbs += `
        <div class="thumb">
            <img src=${image}>
        </div>
    `;
};
















