// elementi html
const thumbsCont = document.querySelector('div.thumbs');
const itemsCont = document.querySelector('div.items');
let items = "";
let thumbs = "";

// array 
const images = [
    "./consegna/img/01.webp",
    "./consegna/img/02.webp",
    "./consegna/img/03.webp",
    "./consegna/img/04.webp",
    "./consegna/img/05.webp",
];

// ciclo for
for (let i = 0; i < images.length; i++) {
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

// generatore img

let activePosition = 0;
const prev = document.querySelector('div.prev');
const next = document.querySelector('div.next');

itemsCont.innerHTML = items;
document.getElementsByClassName('item')[0].classList.add('active');

thumbsCont.innerHTML = thumbs;
document.getElementsByClassName('thumb')[0].classList.add('active');

