const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var world,engine;

var helicopter,helicopterImg,person,personImg,Man_1,Man_1Img,mask,maskImg,bg,bg_2,bf_3,restrictedarea,restrictedareaImg,CV,CVImg,car,car_Img;

var playbutton,playbuttonImg,bg_4;

var gameState="Serve";


function preload(){

playbuttonImg=loadImage("Images/PlayButton.png");
Man_1Img=loadAnimation("Images/Man_1/Without Mask/Man_1 Without Mask.png","Images/Man_1/Without Mask/Man_2 Without Mask.png","Images/Man_1/Without Mask/Man_3 Without Mask.png","Images/Man_1/Without Mask/Man_4 Without Mask.png");
bg=loadImage("Images/Bg.png");
bg_4=loadImage("Images/Bg_2.png");
bg_2=loadImage("Images/Villagebg.png");
bg_3=loadImage("Images/Bg_3.png");
helicopterImg=loadAnimation("Images/HelicopterMoving/HP_1.png","Images/HelicopterMoving/HP_2.png","Images/HelicopterMoving/HP_3.png"
,"Images/HelicopterMoving/HP_4.png","Images/HelicopterMoving/HP_5.png","Images/HelicopterMoving/HP_6.png","Images/HelicopterMoving/HP_7.png",
"Images/HelicopterMoving/HP_8.png","Images/HelicopterMoving/HP_9.png","Images/HelicopterMoving/HP_10.png","Images/HelicopterMoving/HP_11.png","Images/HelicopterMoving/HP_12.png");
maskImg=loadImage("Images/Mask.png");
restrictedareaImg=loadImage("Images/Restricted area board.png");
CV=loadImage("Images/Coronavirus.png");
car_Img=loadImage("Images/Car.png");

}

function setup(){

    engine=Engine.create();
    world=engine.world;

    createCanvas(1000,500);

playbutton=createSprite(400,300);
playbutton.addImage("playbutton",playbuttonImg);
playbutton.scale=0.5;

helicopter=createSprite(500,100);
helicopter.addAnimation("H_P Moving",helicopterImg);
helicopter.scale=0.7;

restrictedarea=createSprite(200,360);
restrictedarea.addImage(restrictedareaImg);
restrictedarea.scale=0.2;
restrictedarea.debug=true;
restrictedarea.setCollider("rectangle",0,0,500,100);

car=createSprite(927,360);
car.addImage(car_Img);
car.scale=0.3;
car.debug=true;


}

function draw(){  

    Engine.update(engine);

    // background(0);

    if(gameState==="Serve"){

        background(bg);
        helicopter.visible=false;
        car.visible=false;
        restrictedarea.visible=false;
        
        fill("coral");
        text("Wear a mask",450,20);
        fill("aqua");
        text("The starting of COVID-19.",10,100);
        text(" A family is planing for a tour from Tamilnadu to Kerla.So they started in a bus.",10,120);
        text("Then the goverment anounced to wear a mask when people go out.But they did not have mask.",10,140);
        text("While travelling suddenly the bus stopped because the driver found a board that 'RESTRICTED AREA 'WEAR A MASK TO ENTER''.",10,160);
        text("And there is a helicopter flying over there with mask to help the people by giving mask.The mask will fall from the helicopter when it find people standing down.",10,180);
        text("But it will not put on the exact where people are standing.",10,200);
        text("So HELP the people by moving them by using Right-> and Left <- arrow keys to catch the mask.",10,220);
        fill("skyblue");
        text("Click on the PLAY button to start the game",10,240);

        if(mousePressedOver(playbutton)){
            gameState="intro";
            
        }

    }

    if(gameState==="intro"){
          console.log("hello world");
          playbutton.destroy();

         background(bg_2);
        helicopter.visible=false;
        car.visible=true;
        car.velocityX=-3;
        restrictedarea.visible=true;

        if(car.collide(restrictedarea)){
           
            gameState="play";
        }

    }

    if(gameState=="play"){
        background(bg_2);
        car.destroy();
        restrictedarea.destroy();
        helicopter.visible=true;
    }

    drawSprites();

    stroke("white");
    text(mouseX + ',' +  mouseY,10,40);
   


}