
let t=0;
winner=[]

window.onload= function(){
    let newG=document.getElementsByClassName("btn")[0];
    newG.addEventListener("click", ()=>{
        window.location.reload();
    });
    s=document.getElementById("board");
    for(let i of s.children){
        i.setAttribute("class","square");
        i.setAttribute("mouse",mouse());
        i.setAttribute("click",click());
    };
        
};
mouse=function(){
    let m=document.querySelector("#board");
    m=m.querySelectorAll("div");
    m.forEach(e=>{
        e.addEventListener("mouseover",function(){this.classList.add("hover");});
        e.addEventListener("mouseout",function(){this.classList.remove("hover");});
    });
}
        
function click(){
    for(let i of s.children){
        i.onclick=function(){
            if (t%2===0 && i.innerHTML ===""){
                i.innerHTML="X";
                i.classList.add("square","X");
                winner.push(i);
                check();
                t+=1;
            } else if(t%2===1 && i.innerHTML===""){
                i.innerHTML="O";
                i.classList.add("square","O");
                winner.push(i);
                check();
                t+=1;
            }
        }
    }
}

function displaywinner(){
    let p=document.getElementById("status");
    let b=document.getElementById("board");
    if(t%2==0){
        p.innerHTML="Congratulations! X is the winner!";
        p.classList.add("status","you-won");
        for(let i of b.children){
            i.off("click");
        }
    } else if(t%2==1){
        p.innerHTML="Congratulations! O is the winner!";
        p.classList.add("status","you-won");
        for(let i of b.children){
            i.off("click");
        }

    }
}
function check(){
    let k=document.getElementById("board").children;
    if(k[0].innerHTML===k[1].innerHTML && k[0].innerHTML===k[2].innerHTML && k[1].innerHTML===k[2].innerHTML && k[0].innerHTML !== ""){
        displaywinner();
    }else if (k[3].innerHTML===k[4].innerHTML && k[3].innerHTML===k[5].innerHTML && k[4].innerHTML===k[5].innerHTML && k[3].innerHTML !== ""){
        displaywinner();
    }else if (k[6].innerHTML===k[7].innerHTML && k[6].innerHTML===k[8].innerHTML && k[7].innerHTML===k[8].innerHTML && k[6].innerHTML !== ""){
        displaywinner();
    }else if (k[0].innerHTML===k[4].innerHTML && k[0].innerHTML===k[8].innerHTML && k[4].innerHTML===k[8].innerHTML && k[0].innerHTML !== ""){
        displaywinner();
    }else if (k[2].innerHTML===k[4].innerHTML && k[2].innerHTML===k[6].innerHTML && k[4].innerHTML===k[6].innerHTML && k[2].innerHTML !== ""){
        displaywinner();
    }else if (k[0].innerHTML===k[3].innerHTML && k[0].innerHTML===k[6].innerHTML && k[3].innerHTML===k[6].innerHTML && k[0].innerHTML !== ""){
        displaywinner();
    }else if (k[1].innerHTML===k[4].innerHTML && k[1].innerHTML===k[7].innerHTML && k[4].innerHTML===k[7].innerHTML && k[1].innerHTML !== ""){
        displaywinner();
    }else if (k[2].innerHTML===k[5].innerHTML && k[2].innerHTML===k[8].innerHTML && k[5].innerHTML===k[8].innerHTML && k[2].innerHTML !== ""){
        displaywinner();
    }
}