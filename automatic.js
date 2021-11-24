img = "";
Status = "";
objects = [];
song = "";


function preload()
{
    song = loadSound("Alarm.mp3");
}
function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
}

function modelloaded()
{
    console.log("Model loaded!!")
    Status = true;
    objectDetector.detect(video, gotResult);
}
function draw()
{
    image(video, 0, 0, 380, 380);

   if( Status != "")
  {
    r = random(255);
    g = random(255);
    b = random(255);
    objectDetector.detect(video, gotResult);
      for ( i = 0; i < objects.length; i++)
         {
        
             document.getElementById("status").innerHTML = "Status : Object detected!!!";
             document.getElementById("noofobjects").innerHTML = " No. of objects detected : " + objects.length;

             fill(r, g, b);
             percent = floor(objects[i].confidence * 100);
             text(objects[i].label + " " + percent + "%", objects[i].x , objects[i].y );
             noFill();
             stroke(r, g, b);
             rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
             
             if(objects[i].label == "person")
             {
                 document.getElementById("person").innerHTML = "Person found! Everything's safe!!";
             }
             else
             {
                 song.play();
                 document.getElementById("person").innerHTML = "Person not found! Seek help!!";
             }
         }
  }
}


function gotResult(error, results)
{
  if(error)
  {
      console.log(error);
  }
  console.log(results);
  objects = results;
}

function backk()
{
    window.location = "index.html";
}