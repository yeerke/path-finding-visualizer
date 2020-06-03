var pos = { x: 0, y: 0 };

function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function draw(e) {
  if (e.buttons !== 1) return; 

  ctx.beginPath(); 

  ctx.lineWidth = 20; 
  ctx.lineCap = "round";

  ctx.moveTo(pos.x, pos.y); 
  setPosition(e);
  ctx.lineTo(pos.x, pos.y);

  ctx.stroke();
}


document.addEventListener("mouseenter", setPosition);