let inp= document.getElementById("inp");
let btn= document.getElementById("btn");
let box= document.getElementById("box")
btn.addEventListener("click", (e)=>{
e.preventDefault();

if(inp.value.trim()== ""){
    alert("Please enter your task")
}

else{
box.innerHTML+=`
<div class="task-box">
            <p class="task">
            ${inp.value}
            </p>
            <button class="del">X</button>
        </div>
`;
inp.value="";
}
});

let rem=document.getElementById("rem");
rem.addEventListener("click", function remove(){
    box.innerHTML= " ";
    inp.value="";
});

box.addEventListener("click", function (e){
if(e.target.classList.contains("del")){
    e.target.parentElement.remove()
}
// if(e.target.tagName=== "BUTTON"){
//     e.target.parentElement.remove()
// }
})
