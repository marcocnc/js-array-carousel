// Array immagini
const images = [
    'assets/img/cowys.webp',
    'assets/img/cowys2.webp',
    'assets/img/crybaby.webp',
    'assets/img/gas.jpg',
    'assets/img/hellboy.jpg',
]

/*
1. Stampare le immagini in slider-images con la classe hide con un ciclo
2. Alla prima immagine va tolta la classe hide
*/

const sliderImages = document.querySelector('.slider-images');
//Step 1
for(let i = 0; i < images.length; i++){

    const image = images[i];
    console.log(image);
    sliderImages.innerHTML += `
    <img class="hide" src = "${image}">
    `;
}

//Step 2
const hideImage = document.getElementsByClassName('hide');
console.log(hideImage);