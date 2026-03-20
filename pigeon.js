document.addEventListener('DOMContentLoaded', () => {
  const pigeon = document.getElementById('pigeon');
  const urlImageReaction = 'formeweird.gif'; 

  if (pigeon) {
    pigeon.style.userSelect = 'none';      
    pigeon.style.pointerEvents = 'auto';   
    pigeon.addEventListener('dragstart', (e) => e.preventDefault()); 

    pigeon.addEventListener('click', (e) => {

      const nouvelleReaction = document.createElement('img');
      nouvelleReaction.src = urlImageReaction;
      nouvelleReaction.alt = "Reaction";
      nouvelleReaction.classList.add('reaction-img-fixe');
      const rect = pigeon.getBoundingClientRect();
      const positionX = rect.left + 85;
      const positionY = rect.bottom - 28; 
      const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      nouvelleReaction.style.left = (positionX + scrollX) + 'px';
      nouvelleReaction.style.top = (positionY + scrollY) + 'px';
      document.body.appendChild(nouvelleReaction);
      
      console.log("Image placée en bas à gauche du pigeon à : " + nouvelleReaction.style.left + ", " + nouvelleReaction.style.top);
    });
  }
});