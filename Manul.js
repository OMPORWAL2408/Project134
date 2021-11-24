img = "";
Status = "";



function preload()
{
    img = loadImage('dc.jpg');
}
function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status: Objects Detectified!!!";
}

function modelloaded()
{
    console.log("Model loaded!!")
    Status = true;
    objectDetector.detect(img, gotResult);
}
function draw()
{
    image(img, 0, 0, 380, 380);
   fill("#FF0000");
   text("Dog", 45, 75);
   noFill();
   stroke("#FF0000");
   rect(30, 60, 450, 350);
   
   fill("#FF0000");
   text("Cat", 320, 120);
   noFill();
   stroke("#FF0000");
   rect(250, 90, 270, 320); 

   
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

function back()
{
    window.location = "index.html";
}