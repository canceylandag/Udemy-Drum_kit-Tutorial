
function check(a){

  switch (a) {

    case "w":
      var audio = new Audio('./sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('./sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('./sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('./sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('./sounds/crash.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('./sounds/kick-bass.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('./sounds/snare.mp3');
      audio.play();
      break;
    default:
  }

}

function animation(a,fun){

var activeButton=document.querySelector("."+a);

  activeButton.classList.add("pressed")
  setTimeout(function(){activeButton.classList.remove("pressed")},100);

}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var ButtonInnerHtml = this.textContent;
    check(ButtonInnerHtml);
    animation(ButtonInnerHtml);
  });

}

document.addEventListener("keydown",function (event){

    check(event.key);
    animation(event.key);

})
