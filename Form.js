class Form
{
   constructor()
   {
       this.input=createInput("");
       this.button=createButton("Click here to start");
       this.greeting=createElement('h3');
       this.title=createElement('h2');
       this.reset=createButton("RESTART");
   }
   hide()
   {
       flag=2;
       this.input.hide();
       this.button.hide();
       this.greeting.hide();
       this.title.hide();
   }
    display()
    {
       
       this.title.html("Car Racing Game by Gargi Agrawal");
       this.title.position((displayWidth/2)-50,10);
                   
       this.input.position(width/2,height/2);
       if(flag===1){
       fill("gray");
       //textAlign(CENTER);
       textSize(20);
       text("Enter Your Name",width/2-85,height/2-30);
       }
       this.button.position((width/2),height/2+50);

       this.reset.position(displayWidth/2+displayWidth/4,20);
       
       this.button.mousePressed(
        ()=>
        {
            this.input.hide();
            this.button.hide();

            player.name=this.input.value();
            playerCount+=1;
            player.index=playerCount;

            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello "+player.name+ ", Welcome to your game");
            this.greeting.position(200,200);
   

        }
        )

        this.reset.mousePressed(
        ()=>
        {
            player.updateCount(0);
            game.update(0);
        }
        )
        

    }
}