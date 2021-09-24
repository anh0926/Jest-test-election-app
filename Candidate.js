// FEATURE 2. Add a part
module.exports = class Candidate {
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.vote = 0;
        this.percentVote = 0;      
    }
    setVoteCount(totalVotes){        
        this.vote = totalVotes
    }    

}