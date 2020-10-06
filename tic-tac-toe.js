let s;
window.onload=function(){
    s=document.querySelector("#board");
    s=s.querySelectorAll("div");
    s.forEach(i =>{
        i.setAttribute("class","square");
    })
   
}