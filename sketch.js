function setup() 
{
   createCanvas(800,800);
}

function draw() 
{
   background(0);
   fill(255);
   ellipse(mouseX,mouseY,100,100);

   drawdonut1(26,145,139,100,100);
   drawdonut1(252,206,11,300,100);
   drawdonut1(140,201,105,500,100);
   drawdonut1(255,115,115,700,100);
}

function drawdonut1(r,g,b,X,Y)
{
   //doughnut #1
   fill(r,g,b);
   ellipse(X,Y,200,200);
   fill(0);
   ellipse(X,Y,120,120);
}


   
