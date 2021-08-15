
let startTasks=[];
let doneTasks=[];

function newTask(){
    let task = document.getElementById("add-item").value;
    if(task.length <= 0 || task==="Please Enter a text"){
        return document.getElementById("add-item").value="Please Enter a text";
    }
    startTasks.push(task);
    document.getElementById("start-tasks-counter").innerHTML=startTasks.length;
    
    let li = document.createElement("li");
    li.className = "card blue-grey darken-1 task-card";

    // let iCheck= document.createElement("input");
    // iCheck.className = "left";
    // iCheck.type="checkbox";
    // var input = document.createElement("input");
    // input.setAttribute("checkbox","");
    // li.appendChild(input);

    li.appendChild(document.createTextNode(task));
    

    let iDelete= document.createElement("i");
    iDelete.className = "material-icons right close";
    iDelete.appendChild(document.createTextNode("clear"));
    iDelete.onclick = function(){
        startTasks.splice(this,1);
        this.parentElement.style.display = "none";
        document.getElementById("start-tasks-counter").innerHTML=startTasks.length;    
    };
    li.appendChild(iDelete);

    let iEdit= document.createElement("i");
    iEdit.className = "material-icons right";
    iEdit.appendChild(document.createTextNode("build"));
    iEdit.onclick = function(){
        console.log(this);
        document.getElementById("add-item").value = this.value;
        document.getElementById("start-tasks-counter").innerHTML=startTasks.length;    
    };
    li.appendChild(iEdit);

    
    document.getElementById("start-list").appendChild(li);
    document.getElementsById("add-item").value="0";

}


document.getElementById("start-tasks-counter").innerHTML=startTasks.length;
document.getElementById("done-tasks-counter").innerHTML=doneTasks.length;

function deleteTask(){
    // this.parentElement.style.display = "none";
    startTasks.find( startTasks => startTasks.splice(task,1));
    document.getElementById("start-tasks-counter").innerHTML=startTasks.length;
}

function editTask(){

}
