class Contestent {
    constructor(){
      this.index = null;
      this.name = null;
      this.answer = null;
    }
  
    getCount(){
      var contestentCountRef = database.ref('contestentCount');
      contestentCountRef.on("value",(data)=>{
    contestentCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestentCount: count
      });
    }
  
    update(){
      var contestentIndex = "contestents/contestent" + this.index
      database.ref(contestentIndex).set({
        name:this.name,
        answer:this.answer
      
      
      });
    }
  
    static getContestentInfo(){
      var contestentInfoRef = database.ref('contestents');
      contestentInfoRef.on("value",(data)=>{
        contestent = data.val();
      })
    }
  }
  