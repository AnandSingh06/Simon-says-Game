let gameSeq=[];
let userSeq=[];

 let btns=["yellow","red","blue","green"];

 let started=false;
 let level=0;
 let h2=document.querySelector("h2");
 let highScore = localStorage.getItem("highScore") || 0;
let h3 = document.querySelector("h3");
h3.innerText = `Highest Score: ${highScore}`;
 document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
      levelUp();
    }
 });
 function gameFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
      btn.classList.remove("flash");
   },250);
 }
 function userflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
      btn.classList.remove("flash");
   },250);
 }
 function levelUp(){  
   userSeq=[];
    level++;
    h2.innerText=`Level ${level}`
    //random btns
   let randomIdx=Math.floor(Math.random()*btns.length);
   let randomclr=btns[randomIdx];
   let randombtn= document.querySelector(`.${randomclr}`);
   gameSeq.push(randomclr);
   console.log(gameSeq);
   
    gameFlash(randombtn);
 }
  
 function checkAns(idx){
  
   if(userSeq[idx]===gameSeq[idx]){
     if(userSeq.length==gameSeq.length){
      setTimeout(levelUp,1000);
     }
   }
   else{    
  let currentScore = level * 10;

  if (currentScore > highScore) {
    highScore = currentScore;
    localStorage.setItem("highScore", highScore);
  }

  h2.innerHTML = `Game Over! your score was <b>${currentScore}</b> <br>Press any key to start.`;
  h3.innerText = `Highest Score: ${highScore}`;
  document.querySelector("body").style.backgroundColor = "red";
  
  reset();
}
 
 function btnpress(){
   // console.log("this");
   let btn=this;
   userflash(btn);

   userColor=btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
 }
 let allbtns= document.querySelectorAll(".btn");
 for(btn of allbtns){
   btn.addEventListener("click",btnpress)
 }
 function reset(){
   started=false;
   gameSeq=[];
   userSeq=[];
   level=0;
 }
