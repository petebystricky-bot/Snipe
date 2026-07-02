function render(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="#202020";

    ctx.fillRect(0,0,canvas.width,canvas.height);

    requestAnimationFrame(render);

}

render();
