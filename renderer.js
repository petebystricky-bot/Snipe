const panorama = new Image();

panorama.src = "panorama.jpg";

let offsetX = 0;

let imageScale = 1;
let imageWidth = 0;
let imageHeight = 0;

panorama.onload = () => {

    imageScale = canvas.height / panorama.height;

    imageWidth = panorama.width * imageScale;
    imageHeight = canvas.height;

}

function drawPanorama(){

    if(!panorama.complete) return;

    // udržujeme offset v rozsahu jednej šírky obrázka
    offsetX %= imageWidth;

    if(offsetX < 0)
        offsetX += imageWidth;

    // začneme kresliť jednu šírku pred obrazovkou
    let start = -offsetX - imageWidth;

    while(start < canvas.width){

        ctx.drawImage(
            panorama,
            start,
            0,
            imageWidth,
            imageHeight
        );

        start += imageWidth;

    }

}

function render(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawPanorama();

    requestAnimationFrame(render);

}

render();
