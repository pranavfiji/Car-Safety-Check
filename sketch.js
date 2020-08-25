var car,wall;
var speed,weight;
var line,line2,line3,line4;
var car2,wall2;
var car3,wall3;
var car4,wall4;

function setup() {
  createCanvas(400,400);
  
 car=createSprite(10,50,50,10);
 wall=createSprite(350,50,20,50);

 car2=createSprite(10,150,50,10);
 wall2=createSprite(350,150,20,50);

 car3=createSprite(10,250,50,10);
 wall3=createSprite(350,250,20,50);

 car4=createSprite(10,350,50,10);
 wall4=createSprite(350,350,20,50);

 line1=createSprite(200,100,400,3);
 line2=createSprite(200,200,400,3);
 line3=createSprite(200,300,400,3);
 line4=createSprite(200,390,400,3);
 
 
 speed=random(55,90);
 car.velocityX=speed;
 car2.velocityX=speed;
 car3.velocityX=speed;
 car4.velocityX=speed;
 weight=random(20,50);

console.log(car.velocityX);
 


}


function draw() {


  background(0);
  

      if(wall.x-car.x<(wall.width/2+car.width/2)){ 
          car.velocityX=0;

          var deformation=0.5*speed*weight*speed/22509;
            
          if(deformation>180){
            car.shapeColor="red";
          }
          if(deformation<180 && deformation>100 ){
            car.shapeColor="yellow";
          }
          if(deformation<80){
            car.shapeColor="green";
          }
        }
      else{
        car.velocityX=speed;
      }


    /*if(car2.x-wall2.x<(wall2.width/2+car2.width/2)){
      car2.velocityX=0;
    }
    else{
      car2.velocityX=speed;
    }
      var deformation=0.5*speed*weight*speed/22509;
      if(deformation>180){
        wall2.shapeColor="red";
      }
      if(deformation<180 && deformation>100 ){
        wall2.shapeColor="yellow";
      }
      if(deformation<80){
        wall2.shapeColor="green";
      }

      if(car3.x-wall3.x<(wall3.width/2+car3.width/2)){

        car3.velocityX=0;
      }
        else{
          car3.velocityX=speed;
        }
        var deformation=0.5*speed*weight*speed/22509;
      
        if(deformation>180){
          wall3.shapeColor="red";
        }
        if(deformation<180 && deformation>100 ){
          wall3.shapeColor="yellow";
        }
        if(deformation<80){
          wall3.shapeColor="green";
        }

        if(car4.x-wall4.x<(wall4.width/2+car4.width/2)){
          car4.velocityX=0;
        }
        else{
          car4.velocityX=speed;
        }
          var deformation=0.5*speed*weight*speed/22509;
          if(deformation>180){
            wall4.shapeColor="red";
          }
          if(deformation<180 && deformation>100 ){
            wall4.shapeColor="yellow";
          }
          if(deformation<80){
            wall4.shapeColor="green";
          
      }*/
    
      

drawSprites();
}

