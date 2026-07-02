const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let offsetX = 0;

function resize(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

window.addEventListener("resize", resize);
resize();
