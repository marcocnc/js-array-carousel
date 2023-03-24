// Array immagini
const images = [
    'assets/img/cowys.webp',
    'assets/img/cowys2.webp',
    'assets/img/crybaby.jpg',
    'assets/img/gas.jpg',
    'assets/img/hellboy.jpg',
]

let counter = 0

/*
1. Stampare le immagini in slider-images con la classe hide con un ciclo
2. Alla prima immagine va tolta la classe hide
3. Al click next o prev aggiungere la classe hide all'image corrente facendola scomparire;
4. Al click next il contatore incrementa e a quell'indice si rimuove la classe hide;
5. Al click prev il contatore decrementa;
6. Alla prima immagine deve scomparire il tasto prev, all'ultima il tasto next;
7. Al click di prev tolgo hide al next, e se il contatore è === 0, aggiungo hide al prev
8. Aggiungo la generazione degli elementi circle al ciclo;
9. Prendo tutti gli elementi circle e al primo aggiungo la classe active
10. Incrementando e decrementando si aggiunge e si toglie la classe active
*/

const sliderImages = document.querySelector('.slider-images');
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

//Step 8
const circles = document.querySelector('.circles')


//Step 1
for(let i = 0; i < images.length; i++){
    
    const image = images[i];
    
    sliderImages.innerHTML += `
    <img class="hide" src = "${image}">
    `;

    circles.innerHTML += `
    <div class="circle"></div>
    `
}

//Step 2
const item = document.querySelectorAll('img');

item[counter].classList = '';

//Step 9
const circleItem = document.getElementsByClassName('circle');
circleItem[counter].classList.add('active');

//Step 3
btnNext.addEventListener('click', function(){

    item[counter].classList.add('hide');
    circleItem[counter].classList.remove('active');

    //Step 4
    
    counter++;
    item[counter].classList.remove('hide');
    circleItem[counter].classList.add('active');
    
    if(counter === images.length - 1){
        btnNext.classList.add('hide');
        console.log(btnNext);
    }

    //Step 6
    btnPrev.classList.remove('hide');

    
});

btnPrev.classList.add('hide');

btnPrev.addEventListener('click', function(){
    item[counter].classList.add('hide');
    circleItem[counter].classList.remove('active');

    //Step 5
    counter--;
    item[counter].classList.remove('hide');
    circleItem[counter].classList.add('active');

    //Step 7
    btnNext.classList.remove('hide');
    
    if(counter === 0){
        btnPrev.classList.add('hide');
    }


});