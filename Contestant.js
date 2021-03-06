class Contestant{
    constructor(){
        this.name = null;
        this.index = null;
        this.answer = 0;
    }
    getCount(){
        var contestantCountRef = database.ref("contestantCount");
        contestantCountRef.on("value",function(data){
            contestantCount=data.val();
        })
    }
    updateCount(count){
        database.ref("/").update({
            contestantCount:count
        })
    }

    update(){
        var contestantIndex = "contestants/contestant"+this.index;//player+1=player1
        database.ref(contestantIndex).set({
            name:this.name,
            answer:this.answer
        });
    }


   //static functions are the functions who dont need object to be called its common for everyone in class

   static getContestantInfo(){
        var contestantInfoRef = database.ref("contestants");
        contestantInfoRef.on("value",(data)=>{
            allContestants = data.val();
        })
    }
}