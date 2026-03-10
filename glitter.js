document.addEventListener("click", function(e) {

    const x = e.clientX;
    const y = e.clientY;
  
    for (let i = 0; i < 20; i++) {
      createSparkle(x, y);
    }
  
  });
  
  function createSparkle(x, y) {
  
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
  
    sparkle.style.left = x + "px";
    sparkle.style.top = y + "px";
  
    const angle = Math.random() * Math.PI * 2;
    const distance = 80 * Math.random();
  
    sparkle.style.setProperty("--dx", Math.cos(angle) * distance + "px");
    sparkle.style.setProperty("--dy", Math.sin(angle) * distance + "px");
  
    document.body.appendChild(sparkle);
  
    setTimeout(() => {
      sparkle.remove();
    }, 800);
  
  }
