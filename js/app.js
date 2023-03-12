window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  let isPainting = false;

  const startPainting=(e)=>{
    isPainting=true;
    draw(e)
  }
  const stopPainting=()=>{
    isPainting=false;
    ctx.beginPath()
  }
  const draw = (e) => {
    if (!isPainting) {
      return
    }

    ctx.lineCap = 'round'
    ctx.lineWidth = 10
    ctx.lineTo(e.clientX, e.clientY)
    ctx.stroke()

  };


  

  window.addEventListener("mousedown", startPainting);
  window.addEventListener("mouseup", stopPainting);
  window.addEventListener("mousemove", draw);
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
