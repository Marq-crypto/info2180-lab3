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
    i.addEventListener("click",function(){
        if(!(i.getAttribute("class").includes("X")||i.getAttribute("class").includes("O"))){
            if (i==null){
                i.setAttribute("class","square X");
                i.innerHTML="X";
                winner.push(i);
            }
            else if(i==null){
                i.setAttribute("class","square O");
                i.innerHTML="O";
                winner.push(i);
            }
        }
    })
})
s.forEach(i =>{
    i.addEventListener("over",function(){
        i.setAttribute("class","hover");
    })
})
s.forEach(i =>{
    i.addEventListener("leave",function(){
        i.setAttribute("class","hover O");
    })
})
