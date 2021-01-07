class Game
{
    constructor(){}

    getState()
    {
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data) {
        gameState=data.val();
        });
    }

    update(state)
    {
        database.ref('/').update(
        {
                gameState: state
        });
    }

    async start()
    {
    
        if(gameState===0)
        {
            image(bg,0,0,displayWidth,displayHeight);
            player=new Player();
            var playerCountRef=await database.ref('playerCount').once("value");
            if (playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount();
            }
            form=new Form();
            form.display();

        }

        car1=createSprite(100,200);
        car1.addImage(car1Image);

        car2=createSprite(300,200);
        car2.addImage(car2Image);

       // car3=createSprite(700,200);
       // car3.addImage(car3Image);

       // car4=createSprite(900,200);
       // car4.addImage(car4Image);

        cars=[car1,car2]
        //,car3,car4];
    }

    play()
    {   
        form.hide();
        textSize(30);
        textFont("Elephanta");
        text("Game Start",100,100);
        
        Player.getPlayerInfo();
        player.getLeaderBoard();

        if(allPlayers!==undefined)
        {
            image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5);
            //console.log(allPlayers);
            pos=150;
            var index=0;
            var x=170
            var y;
            for(var plr in allPlayers)
            {
                index=index+1;
                x=x+220;
                y=displayHeight-100-allPlayers[plr].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;
               if(index===player.index)
               {
                stroke=10;
                fill("red");
                circle(x,y,60);
                camera.position.x=displayWidth/2;
                camera.position.y=cars[index-1].y;
                cars[index-1].shapeColor="red";
               }
            }            
        }

        if(keyDown("up")&& player.index!==null){
            player.distance+=50;
            player.update();
        }
        if(player.distance>3800)
        {
            gameState=2;
            player.rank+=1;
            Player.updateLeaderBoard(player.rank);
        }
    drawSprites();
    }
    end()
    {
      console.log("Game has ended");
      console.log(player.rank);
    }

}