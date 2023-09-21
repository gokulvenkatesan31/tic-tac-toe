turn=0;
player1list=[];
player2list=[];
win1=0;
win2=0;
document.querySelectorAll(".js-board")
    .forEach((poss,index)=>{
        console.log(poss);
        poss.addEventListener("click",()=>{check(poss,index+1)})
    });

function check(poss,i){
    console.log(i)
    if(turn%2===0){
        if(poss.innerHTML!="1" && poss.innerHTML!='2'){
            poss.innerHTML="1";
            poss.classList.add("player1-style");
            player1list.push(i);
            if(player1list.length>=3){
                if (result(player1list.sort())){
                    
                    setTimeout(() => {
                        document.querySelectorAll(".js-board")
                        .forEach((poss,index)=>{
                            poss.classList.remove("player1-style")
                            poss.classList.remove("player2-style")
                            poss.classList.remove("style")
                            poss.innerHTML="";
                            document.querySelector(".js-win").innerHTML=""
                        })
                    }, 2000)
                    document.querySelectorAll(".js-board")
                        .forEach((poss,index)=>{
                            poss.classList.add("style")
                            
                        });
                    document.querySelector(".js-win").innerHTML="player 1 is WIN!!!!"
                    player1list=[];
                    player2list=[];
                    win1++;
                    document.querySelector(".js-win1").innerHTML=`Win : ${win1}`;
                }
            }
            document.querySelector(".js-turn2").innerHTML="turn : your turn";
            document.querySelector(".js-turn1").innerHTML="turn : ";
            
            turn++;
        }
        else{
            alert("the position is already occupaid!!!");
        }
    }
    else{
        if(poss.innerHTML!="1" && poss.innerHTML!="2"){
            poss.innerHTML="2";
            poss.classList.add("player2-style")
            player2list.push(i)
            if(player2list.length>=3){
                if (result(player2list.sort())){
                    setTimeout(() => {
                        document.querySelectorAll(".js-board")
                        .forEach((poss,index)=>{
                            poss.classList.remove("player1-style")
                            poss.classList.remove("player2-style")
                            poss.innerHTML="";
                            document.querySelector(".js-win").innerHTML=""
                        })
                    }, 2000)
                    document.querySelectorAll(".js-board")
                        .forEach((poss,index)=>{
                            poss.classList.add("player2-style")
                            
                        });
                    document.querySelector(".js-win").innerHTML="player 2 is WIN!!!!"
                    player1list=[];
                    player2list=[];
                    win2++;
                    document.querySelector(".js-win2").innerHTML=`Win : ${win2}`;

                    
                }
            }
            document.querySelector(".js-turn1").innerHTML="turn : your turn";
            document.querySelector(".js-turn2").innerHTML="";
            turn++;
        }
        else{
            alert("the position is already occupaid!!!");
            
        }
    }
}

function result(list){
    if(list[0]===1 && list [1]===2 && list[2]===3){
        return true;
    }
    else if((list[0]===1 && list [1]===4 && list[2]===7) || (list[0]===1 && list [1]===4 && list[3]===7) ||(list[0]===1 && list [2]===4 && list[3]===7) ) {
        return true;
    }
    else if(list[0]===1 && list [1]===5 && list[2]===9 ||(list[0]===1 && list [1]===5 && list[3]===9)||(list[0]===1 && list [2]===5 && list[3]===9) ){
        return true;
    }
    else if(list[0]===3 && list [1]===5 && list[2]===7 || (list[0]===3 && list [1]===5 && list[3]===7) || (list[1]===3 && list [2]===5 && list[3]===7)){
        return true;
    }
    else if((list[0]===4 && list [1]===5 && list[2]===6) || ((list[1]===4 && list [2]===5 && list[3]===6))){
        return true;
    }
    else if(list[0]===7 && list [1]===8 && list[2]===9 || (list[1]===7 && list [2]===8 && list[3]===9)) {
        return true;
    }
    else if(list[0]===2 && list [1]===5 && list[2]===8 || list[1]===2 && list [2]===5 && list[3]===8 || list[0]===2 && list [2]===5 && list[3]===8 || list[0]===2 && list [1]===5 && list[3]===8 || list[1]===2 && list [2]===5 && list[4]===8) {
        return true;
    }
    else if(list[0]===3 && list [1]===6 && list[2]===9 ||(list[1]===3 && list [2]===6 && list[3]===9) || (list[0]===3 && list [2]===6 && list[3]===9) ||(list[0]===3 && list [1]===6 && list[3]===9)){
        return true;
    }
    else{
        return false;
    }
}