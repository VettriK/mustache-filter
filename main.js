
mustache=""
noseX=0
noseY=0
function preload(){
mustache=loadImage("mustache.png")
}
function setup(){
canvas = createCanvas(500,500)
canvas.center()
video=createCapture(VIDEO)
video.size(500,500)
video.hide()
PoseNet=ml5.poseNet(video,modelLoaded)
PoseNet.on("pose",gotResult)
}
function modelLoaded(){
    console.log("modelLoadedSuccessfuly")
}
function draw(){
image(video,0,0,500,500)
fill("red")
stroke("red")
circle(noseX, noseY, 50)
image(mustache, noseX, noseY, 80, 50)
}
function snap(){
    save("realtimeFilterImage.jpg")
}
function gotResult(result){
if (result.length > 0){
    console.log(result)
    noseX=result[0].pose.nose.x-40
    noseY=result[0].pose.nose.y
}
}
