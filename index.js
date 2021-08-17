
let startTasks=[];
let doneTasks=[];


let input = document.getElementById("add-item");
let  startTasksCounter = document.getElementById("start-tasks-counter");
let startList = document.getElementById("start-list");
let doneTasksCounter = document.getElementById("done-tasks-counter");

function newTask(){
    let task = input.value;
    if(task.length <= 0 || task==="Please Enter a text"){
        return input.value="Please Enter a text";
    }
    startTasks.push(task);
    startTasksCounter.innerHTML=startTasks.length;
    
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
    // iDelete.onclick = function(){
    //     console.log(this);
    //     startTasks.splice(this,1);
    //     this.parentElement.style.display = "none";
    //     startTasksCounter.innerHTML=startTasks.length;    
    // };
    li.appendChild(iDelete);

    let iEdit= document.createElement("i");
    iEdit.className = "material-icons right edit";
    iEdit.appendChild(document.createTextNode("build"));
    // iEdit.onclick = function(){
    //     //console.log(this.parentElement.value); => output 0
    //     let index = startTasks.find( tasks => this.parentElement.nodeValue==tasks);
    //     console.log(index); //=> output undefined
    //     input.value = startTasks[index];
    //     startTasksCounter.innerHTML=startTasks.length;    
    // };
    li.appendChild(iEdit);

    
    startList.appendChild(li);
    input.value="";
    
}



startList.addEventListener('click', e => {
    if(e.target.tagName == 'LI') { e.target.classList.toggle('checked'); input.value = e.target.innerHTML;}
    else if(e.target.tagName=='I' && e.target.className=="material-icons right close"){
        // this.parentElement.style.display = "none";
        // e.target.style.display="none";
        console.log(e.target.nodeValue);
        // e.target.display('none');
        startTasks.splice(e.target,1);
        startTasksCounter.innerHTML=startTasks.length;
    }
    else if(e.target.tagName=='I' && e.target.className=="material-icons right edit")console.log('edit ' + e.target.innerHTML);

});



$(this).parent().text()


function deleteTask(){
    // this.parentElement.style.display = "none";
    startTasks.find( startTasks => startTasks.splice(task,1));
    startTasksCounter.innerHTML=startTasks.length;
}

function editTask(){

}
