let s;
let turn= 'X';
let winner=[
    '','','',
    '','','',
    '','','',
];

window.onload=function(){
    s=document.querySelector("#board");
    s=s.querySelectorAll("div");
    s.forEach(i =>{
        i.setAttribute("class","square");
    })
   
}
const y=Array.from(s.querySelectorAll("#board div"));
function mark(){
    winner.forEach(function(m,i){
        console.log(m,i);
        y[i].textContent=m;
    });
};

s.getElementById("board").addEventListener("click",handle);
function handle(e){
    let x=y.findIndex(function(square){
        return square === e.target;
    });
    winner[x]=turn;
    console.log(winner);
    turn=turn==='X'?'O':'X';
};
