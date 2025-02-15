let gameseq=[];
let userseq =[];
let start = false;
let level=0;
let h2 = document.querySelector("h2");
let btn=["one","two","three","four","five","six"];
let hs =0;

document.addEventListener("keypress",function(){
    if(start == false){
        start=true;
        levelup();

    }
})
 function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
   
    let rdmidx = Math.floor(Math.random() * btn.length); 
    let rdmcol = btn[rdmidx];
    let rdmbtn = document.querySelector(`.${rdmcol}`);
    gameseq.push(rdmcol);
    console.log(gameseq);
    
    gameflash(rdmbtn);
}
function gameflash(btn){
 btn.classList.add("flash");
 setTimeout(function(){
    btn.classList.remove("flash")
 },400)
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
       btn.classList.remove("userflash")
    },250)
   }
function btnpress(){
 let btn = this;
 userflash(btn);
 usercolor = btn.getAttribute("id")
 userseq.push(usercolor)
 check(userseq.length-1);
}
let allbtn = document.querySelectorAll(".box")
for(btns of allbtn){
    btns.addEventListener("click",btnpress)
}
function check(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup(),1500);
        }
    }
    else{
         if(hs<level){
            hs = level
         }
         h2.innerHTML = `Game over! Your Score <b>${level}</b> <br>Press Any key to Start <br> Highest Score ${hs}`;
         document.querySelector("body").style.backgroundColor="red";
         setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";    
         },150)
         reset();
    }
}
function reset(){
    start = false;
    gameseq =[];
    userseq =[];
    level=0;
}