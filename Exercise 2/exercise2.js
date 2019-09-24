var slideNum = 1;

function slideInc(){
  slideNum = slideNum + 1;
  slideShow();
}

function slideDec(){
  slideNum = slideNum - 1;
  slideShow();
}

function slideShow(){
  if(slideNum == 6 || slideNum == 1){
    slideNum = 1;
    document.getElementById("img").src = "http://www.kidsmathgamesonline.com/images/pictures/shapes/circle.jpg";
    document.getElementById("img").alt = "Circle";
  }
  if(slideNum == 2){
    document.getElementById("img").src = "https://pbs.twimg.com/profile_images/905183271046193153/q_P1KBUJ_400x400.jpg";
    document.getElementById("img").alt = "Square";  }
  if(slideNum == 3){
    document.getElementById("img").src = "https://www.pelennapatchworks.co.uk/user/products/large/paper%20triangles.jpg";
    document.getElementById("img").alt = "Triangle";
  }
  if(slideNum == 4){
    document.getElementById("img").src = "http://www.virginiaplaces.org/military/graphics/pentagonoverhead.png";
    document.getElementById("img").alt = "Pentagon";
  }
  if(slideNum == 0 || slideNum == 5){
    slideNum = 5;
    document.getElementById("img").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Regular_dodecagon.svg/1024px-Regular_dodecagon.svg.png";
    document.getElementById("img").alt = "Dodecagon";
  }
}
