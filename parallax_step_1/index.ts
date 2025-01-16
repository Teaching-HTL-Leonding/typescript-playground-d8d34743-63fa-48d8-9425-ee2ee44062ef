let backgroundimages: p5.Image[] = []
let backgroundscale: number = 1
let scaledimagewidth = 0
let scaledimageheight = 0
let themesix = 1
function preload(){
    for(let i = 0; i<winter.length; i++){
    backgroundimages.push(loadImage(`${BASE_URL}/winter/${winter[i]}`))
    }
}
function setup (){
    createCanvas(500,500)
    backgroundscale = width / backgroundimages[0].width
    scaledimagewidth = backgroundimages[0].width * backgroundscale
    scaledimageheight = backgroundimages[0].height * backgroundscale
}

function draw(){
  for(let i =0; i<backgroundimages.length; i++){
    image(backgroundimages[i],0,0,scaledimagewidth,scaledimageheight)
    }
}
