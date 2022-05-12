var noseX=0;
var noseY=0;
function preload()
{
clown_nose=loadImage('https://i.postimg.cc/8PcjNFVd/8645e3f164172a655824e68d25633a28-clown-nose-clowns-removebg-preview.png');
}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses);
}
function draw()
{
 image(video, 0,0,300,300);
 image(clown_nose,noseX,noseY,30,30);
}
function take_snapshot()
{
    save('myfilter.png');
    
}

function modelLoaded() {
    console.log('poseNet is Initizialed')
}

function gotPoses(results)
{
    if(results.length>0)
{
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
     console.log("rosex="+noseX);
     console.log("rosey="+noseY); 
    }
}