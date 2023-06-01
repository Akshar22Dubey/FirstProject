var size= document.querySelectorAll(".drum").length;
for(var i =0 ; i<size ; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var letterPLayed = this.innerHTML;
        createsound(letterPLayed);
        createAnimation(letterPLayed);
    
    });
}

document.addEventListener("keypress",function(event)
{
    createsound(event.key);
    createAnimation(event.key);
})

function createsound(key)
{
    

    switch (key)
    {
      case "A":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;

      case "B":
          var kick_bass = new Audio("sounds/kick-bass.mp3");
          kick_bass.play();
          break;

      case "C":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;

          case "D":
              var tom1 = new Audio("sounds/tom-1.mp3");
              tom1.play();
              break;   

              case "E":
                  var tom2 = new Audio("sounds/tom-2.mp3");
                  tom2.play();
                  break;  

                  case "F":
                      var tom3 = new Audio("sounds/tom-3.mp3");
                      tom3.play();
                      break;

                      case "G":
                          var tom4 = new Audio("sounds/tom-4.mp3");
                          tom4.play();
                          break;

                        default : console.log(letterPLayed);  

}
}


function createAnimation(key)
{
    var presentkey = document.querySelector("." + key);
    presentkey.classList.add("pressed");
    setTimeout(function()
    {
        presentkey.classList.remove("pressed");
    },100);
}
//inner.HTML vo html ka jo bhi output hai vo de deta hai