let s;
var winner=[];
let check=false;

window.onload=function(){
    s=document.querySelector("#board");
    s=s.querySelectorAll("div");
    s.forEach(i =>{
        i.setAttribute("class","square");
    })
   
}
s.forEach(i =>{
    s.addEventListener("click",function(){
        if(!(s.getAttribute("class").includes("X")||s.getAttribute("class").includes("O"))){
            if (check==false){
                s.setAttribute("class","square X");
                s.innerHTML="X";
                winner.push(i);
                check=true;
            }
            else if(check==true){
                s.setAttribute("class","square O");
                s.innerHTML="O";
                winner.push(i);
                check=false;
            }
        }
    })
})