
class Player{
    constructor()
    {
    this.index=null;
    this.distance=0;
    this.name=null;
    this.rank=null;
    }
    getCount()
    {
        var playerRef=database.ref('playerCount');
        playerRef.on("value",(data)=>
        {
        playerCount=data.val();
        })
    }
    updateCount(count)
    {
        database.ref('/').update(
            {
                playerCount: count
            }
        )
    }

    update()
    {
        var playerIndex="players/player"+playerCount;
        database.ref(playerIndex).set(
            {
                name: this.name,
                distance: this.distance,
                index: this.index,
                
            }
        );
    }
    static getPlayerInfo()
    {
        var playerInforRef=database.ref("players");
        playerInforRef.on("value",(data)=>
        {
         allPlayers=data.val();   
        })
                     
    }
    getLeaderBoard()
    {
        database.ref('Leaderboard').on("value", (data)=>
        {
            this.rank=data.val();
        })
    }
    static updateLeaderBoard(rank)
    {
        database.ref('/').update({
            leaderboard:rank
        }
        )
    
    }
};
