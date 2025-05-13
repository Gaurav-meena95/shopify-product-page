let thumbImg = document.querySelector('.thumbimg');
let images = ['thumb1.jpeg', 'thumb2.jpg', 'thumb3.jpg', 'thumb4.jpeg', 'thumb5.jpeg'];
let cuurentIndx = 0

function updateImage (){
  thumbImg.src = 'assests/thumb/'+ images[cuurentIndx]

}
function moveForward(){
  cuurentIndx =( cuurentIndx + 1) % images.length;
  updateImage();
}
function moveBackward(){
  cuurentIndx =( cuurentIndx - 1 + images.length) % images.length;
  updateImage();
}

document.querySelectorAll('.arrow')[0].addEventListener('click', moveBackward);
document.querySelectorAll('.arrow')[1].addEventListener('click', moveForward);
updateImage();