let s;
var winner=[];

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
            if (i.querySelector("div")==null){
                s.setAttribute("class","square X");
                div.innerHTML="X";
                winner.push(i);
            }
            else if(i.querySelector("div")==null){
                s.setAttribute("class","square O");
                div.innerHTML="O";
                winner.push(i);
            }
        }
    })
})