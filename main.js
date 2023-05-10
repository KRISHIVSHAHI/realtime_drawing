nose_x=0;
nose_y=0;
left_wrist_x=0;
right_wrist_x=0;
difference=0;








function setup()

{
    canvas=createCanvas(400,400);
    canvas.position(560,150);

    video=createCapture(VIDEO);
    video.size(550,500);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    consol.log("PoseNet is initialised");

}

function gotPoses(error,results)
{
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nose_x = "+nose_x+" , nose_y = "+nose_y);

        left_wrist_x=results[0].pose.leftWrist.x;
        right_wrist_x=results[0].pose.righttWrist.x;
        difference=floor(left_wrist_x-right_wrist_x);
        console.log("left_wrist_x = "+left_wrist_x+" , right_wrist_x = "+right_wrist_x+" , difference = "+difference);
    
    }

}

function draw()
{
    background("orange");
    fill("blue");
    stroke("green");
    square(nose_x , nose_y , difference);
}