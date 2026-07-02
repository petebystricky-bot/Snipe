const canvas=document.getElementById("canvas");

const ctx=canvas.getContext("2d");

let offsetX = 0;

function resize(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if(panorama.complete){

        imageScale = canvas.height / panorama.height;
        imageWidth = panorama.width * imageScale;
        imageHeight = canvas.height;

    }

}
