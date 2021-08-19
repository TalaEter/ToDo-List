
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
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(startTasks => startTasks.json())
            .then(json => startTasks=json)
            .then( setTimeout(()=>{this.loadTasksList();startTasksCounter.innerHTML=startTasks.length;},3000))
            ;
        // console.log("fetching",startTasks.length);
        
    }
    

    handleOnClickAdd(){ //to display -> inner call for addNewTask
        let  task=input.value;
        if(task.length <= 0 || task==="Please Enter a text"){
            return input.value="Please Enter a text";
        }

        let newTask = {task, checked:false,id:startTasks.length+1};
        
        
        
        startTasks.push(newTask);
        startTasksCounter.innerHTML=startTasks.length;
        input.value="";
        let editButton="Edit";
        // console.log("add",startTasks);

        this.loadTasksList()
        localStorage.setItem("startTasks", JSON.stringify(startTasks))
        // console.log("added");
    }

    displayTasksList(task, id) {
        return `<li class="card task-card" draggable="true" ondragstart="toDoObj.drag(event)" id="${id}">
        <input type="text" value="${task}" disabled class="col s8" style="display:inline">
        <span onclick="toDoObj.onDeleteTask(event,${id})" id="11" class="right button">Delete</span>
        <span onclick="toDoObj.onEditTask(event,${id})" class="right button">Edit</span>
    </li>`
    }
    loadTasksList() {
        // console.log("load tasks list");
        let taskHtml = startTasks.reduce((html, taskObj) => html += this.displayTasksList(taskObj.title, taskObj.id), '');
        document.getElementById('start-list').innerHTML = taskHtml;
    }
    toggleCheck(){}

    onDeleteTask(e,id){
        // console.log("delete");
        // console.log(e.path[1]);
        e.path[1].style.display="none";
        let index = startTasks.findIndex(task => task.id===id);
        startTasks.splice(index, 1);
        startTasksCounter.innerHTML=startTasks.length;

    }

    onEditTask(e,id){
        let button = e.path[1].firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nodeValue;
        
        
        if(button==="Edit"){
            // console.log("edit to submit");
            e.path[1].firstChild.nextSibling.disabled=false;
            e.path[1].firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nodeValue="Submit";
        }
        else if(button==="Submit"){
            // console.log("submit to edit");
            
            let index = startTasks.findIndex(task => task.id===id);
            startTasks[index].task=e.path[1].firstChild.nextSibling.value
            // console.log(startTasks[index]);
            
            e.path[1].firstChild.nextSibling.disabled=true; 
            // console.log(e.path[1].firstChild);
            e.path[1].firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.nodeValue="Edit";   
        }
        startTasksCounter.innerHTML=startTasks.length;
    }

    drag(e){
        e.dataTransfer.setData("LI",e.target.id);
        e.target.style.backgroundColor = `#fff !important`;
        // console.log(e.target.style);
    }
    drop(e){
        e.preventDefault();
        let data=e.dataTransfer.getData("LI");
        e.target.appendChild(document.getElementById(data));

    }
    allowDrop(e){
        e.preventDefault();
    }

    
}


let toDoObj;
window.addEventListener("load", () => {
    toDoObj=new toDo();
});