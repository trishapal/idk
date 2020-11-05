var Car;
var CrashWall;
var Speed, Weight;
var Deformation;

function setup() {
  createCanvas(1600, 400);

  Car = createSprite(50, 200, 50, 50);
  CrashWall = createSprite(1200, 200, 60, height/2);

  //Initializing random variables 
  Speed = random(55, 90);
  Weight = random(400, 1500);


  Car.shapeColor = color(255);
  CrashWall.shapeColor = color(80, 80, 80);
}

function draw() {
   background(0);

  //Making the car move
  Car.velocityX = Speed;

  //Checking collision of Car with CrashWall 
    if (CrashWall.x-Car.x < (Car.width+CrashWall.width)/2) {
    Car.velocityX=0;

    //Initializing Deformation for crash testing
    Deformation = (0.5 * Weight * Speed * Speed)/ 22500;

    //Changing Colours of Car
    if (Deformation > 180) {
      Car.shapeColor = color(255, 0, 0); //Making the car Red
    }

   if (Deformation < 100) {
    Car.shapeColor = color(0, 250, 0); //Making the car Green
    }

   if (Deformation <180 && Deformation > 100) {
    Car.shapeColor = color(230, 230 ,0); //Making the car Yellow
    }
  }
  drawSprites();
}