const createIssueButton=document.getElementById("createIssue");
const inputText=document.getElementById("inputText");

createIssueButton.addEventListener("click",()=>{
    createIssueButton.style.display="none";
    inputText.style.display="block";
})

const todoContainer=document.getElementById("todo");

const cardContainer=document.getElementById("card")

const containers=document.querySelectorAll(".container");

inputText.addEventListener("keyup",(e)=>{
    if(e.keyCode==13){
        
        const card = document.createElement("div");
        card.innerText = e.target.value.trim();
        card.className = "card";
        card.draggable = true;
        card.addEventListener("dragstart",onDragStart)
        todoContainer.appendChild(card);

        inputText.value="";
        createIssueButton.style.display="block";
        inputText.style.display="none";

    } 
})

let draggedElement = null;

function onDragStart(event){
    draggedElement=event.target;
}

function onDragOver(event){

    draggedElement.parentNode


    if(draggedElement.parentNode.id===event.target.id){
        return;
    }
    event.preventDefault();
}

function onDrop(event){
    event.currentTarget.appendChild(draggedElement);
    if(event.currentTarget.id==="done"){
        draggedElement.classList.add("done");
    }
}

for(let i=0;i<containers.length;i++){
    containers[i].addEventListener("dragover",onDragOver);
    containers[i].addEventListener("drop",onDrop);
}