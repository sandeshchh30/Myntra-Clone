let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");

let slide_index = 0;
function currentslides(n){
    for(let i=0; i<slides.length; i++){
        slides[i].style.display = "none";
        dots[i].classList.remove('active');
    }
    slides[n-1].style.display = "block";
    dots[n-1].classList.add('active');
    slide_index = n-1;
}

setInterval(() => {
    currentslides(slide_index + 1);
    slide_index++;
    if(slide_index == 9){
        slide_index = 0;
    }
}, 4000);


const arrow = document.getElementsByClassName('arrow')[0];
const free_ship = document.getElementsByClassName('FreeShipping')[0];

arrow.addEventListener('click', ()=>{ 
    arrow.classList.toggle('rotate-180');
    free_ship.classList.toggle('d-none');
})