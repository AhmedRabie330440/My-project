let imges = Array.from(document.querySelectorAll('.img-item'));
let Items = document.querySelector('.light-box');
let lightBoxContent = document.querySelector('.light-box-content');
let nextButton = document.querySelector('.next');
let prevButton = document.querySelector('.prev');
let closeButton = document.querySelector('.close');
let CurrentIndex = 0;

for (let i = 0; i < imges.length; i++) {
  imges[i].addEventListener('click', function (e) {
    let Imgscr = e.target.getAttribute('src');
    CurrentIndex = imges.indexOf(e.target);
    Items.classList.replace('d-none', 'd-flex');
     lightBoxContent.style.backgroundImage = `url(${Imgscr})`;
  });
};

function nextSlide() {
  CurrentIndex++;

  if(CurrentIndex==imges.length){

    CurrentIndex=0;
  };

  let imgscr = imges[CurrentIndex].getAttribute('src');
  lightBoxContent.style.backgroundImage=`url(${imgscr})`;
};
nextButton.addEventListener('click',nextSlide);  

function prevSlide() {
    CurrentIndex--;
  
    if(CurrentIndex== -1){
  
      CurrentIndex= imges.length-1;
    };
  
    let imgscr = imges[CurrentIndex].getAttribute('src');
    lightBoxContent.style.backgroundImage=`url(${imgscr})`;
  };
  prevButton.addEventListener('click',nextSlide);  

function close(){
    Items.classList.replace('d-flex', 'd-none');
};
closeButton.addEventListener('click' , close);

document.addEventListener('keydown' , function(e){
if(e.key =='ArrowRight'){
    slide(1);
}
else if(e.key == 'ArrowLeft'){
    slide(-1)
}
else if(e.key == 'Escape'){

    closeSlide()
}

})