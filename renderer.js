const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function render(){

    ctx.fillStyle = "red";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    requestAnimationFrame(render);
}

render();
