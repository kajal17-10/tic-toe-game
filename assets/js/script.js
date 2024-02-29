let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;
const winpatterns=[[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerHTML="0";
            box.style.color="red"
            turn0 =false;
        }
        else{
            box.innerHTML="x";
            box.style.color="green"
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
       
    })
});
// reset game function 
const resetgame=()=>{
    enablebox();
    turn0=true;
    msgcontainer.classList.add("hide");
}
// function disable
const disablebtn=()=>{
    for( let box of boxes){
        box.disabled=true;
    }
};
// enable function
const enablebox=()=>{
    for(let ebox of boxes){
        ebox.disabled=false;
        ebox.innerHTML="";
    }
}

//  show wiiner function
const showwinner=(winner)=>{
msg.innerHTML=`congraculations winner !! ${winner}`;
msgcontainer.classList.remove("hide");
disablebtn();
}
const checkwinner=()=>{
    for(let pattern of winpatterns){
       
        let pass1val=boxes[pattern[0]].innerHTML;
        let pass2val=boxes[pattern[1]].innerHTML;
        let pass3val=boxes[pattern[2]].innerHTML;
        if(pass1val !="" && pass2val !="" && pass3val != ""){
            if(pass1val===pass2val && pass2val=== pass3val){
                showwinner(pass1val);
            }
          
        }
       
    }
};