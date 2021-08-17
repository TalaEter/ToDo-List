
let input = document.getElementById("add-item");
let  startTasksCounter = document.getElementById("start-tasks-counter");
let startList = document.getElementById("start-list");
let doneTasksCounter = document.getElementById("done-tasks-counter");
let startTasks=[];
let text,checked,id;
let index=0;

class toDo{
    tasks = [{text,checked,id}];
    
    constructor(){
        this.startTasks = JSON.parse(localStorage.getItem('startTasks'));
        this.loadTasksList();
        startTasksCounter.innerHTML=startTasks.length;

    }
    
    addNewTask(){ //to add to array , without display
            
    }

    handleOnClickAdd(){ //to display -> inner call for addNewTask
        let  task=input.value;
        if(task.length <= 0 || task==="Please Enter a text"){
            return input.value="Please Enter a text";
        }

        console.log("add");
        let newTask = {task, checked:false,id:1};
        
        
        
        startTasks.push(newTask);
        startTasksCounter.innerHTML=startTasks.length;
        input.value="";
        let editButton="Edit";

        // <li class="card task-card" id="${newTask.id}">
        //     <p style="display: inline;">${task}</p>
        //     <span onclick="toDoObj.onDeleteTask(event,${newTask.id})" id="11" class="right delete-button">Delete</span>
        //     <span onclick="toDoObj.onEditTask()" class="right">Edit</span>
        // </li>
        let LI = `
        <li class="card task-card" id="${newTask.id}">
            <input type="text" value="${task}" disabled class="col s8" style="display:inline">
            <span onclick="toDoObj.onDeleteTask(event,${newTask.id})" id="11" class="right button">Delete</span>
            <span onclick="toDoObj.onEditTask(event)" class="right button">${editButton}</span>
        </li>
        `;
        document.getElementById("start-list").innerHTML += LI;
        localStorage.setItem("startTasks", JSON.stringify(LI))
        console.log("added");
        // startList.appendChild(element);
    }

    toggleCheck(){}

    onDeleteTask(e,id){
        console.log("delete");
        console.log(e.path[1]);
        e.path[1].style.display="none";
        let index = startTasks.findIndex(task => task.id===id);
        startTasks.splice(index, 1);
        startTasksCounter.innerHTML=startTasks.length;

    }

    onEditTask(e){
        let button = e.path[1].firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nodeValue;
        
        
        if(button==="Edit"){
            // console.log("edit to submit");
            e.path[1].firstChild.nextSibling.disabled=false;
            e.path[1].firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nodeValue="Submit";
        }
        else if(button==="Submit"){
            // console.log("submit to edit");
            
            // let index = startTasks.findIndex(task => task.id===id);
            // console.log(startTasks[index]);
            
            // e.path[1].firstChild.nextSibling= `<input type="text" value="${e.path[1].firstChild.nextSibling.value}" disabled class="col s8" style="display:inline">`;
            // e.path[1].firstChild.nextSibling.disabled=true; 
            console.log(e.path[1].firstChild);
            e.path[1].firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nodeValue="Edit";   
        }
        startTasksCounter.innerHTML=startTasks.length;
    }

    loadTasksList(newTask){

    }

    
}


let toDoObj;
window.addEventListener("load", () => {
    toDoObj=new toDo();
});