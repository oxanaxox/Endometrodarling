document.addEventListener("DOMContentLoaded", function() {

    const car = document.getElementById("car");
    const sound = document.getElementById("carSound");
  
    let position = 0; 
  
    car.addEventListener("click", function() {
  
      position -= 350; 
      car.style.transform = `translateX(${position}px)`;
  
      sound.currentTime = 0;
      sound.play();
  
    });
  
  });
