// function myFunction() {
//     var txt;
//     var person = prompt("Please enter your name:", "Harry Potter");
//     if (person == null || person == "") {
//         txt = "User cancelled the prompt.";
//     } else {
//         txt = "Hello " + person + "! How are you today?";
//     }
//     document.getElementById("comment").innerHTML = txt;
// }

var myCarousel = document.querySelector('.carousel')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: false,
    wrap: false
  })

console.log('javascript loaded');

myCarousel.addEventListener('slid.bs.carousel', function () {
  console.log('The slide has finished sliding. It slid.!')
  var currentImage = document.querySelector('.active').children[0]
  console.log(`the current alt is: ${currentImage.alt}`)
  console.log(`the current source is: ${currentImage.src}`)
})