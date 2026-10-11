console.log("todo app started");
function addTask(){
    const task=document.getElementById("task").value;
    document.getElementById("tasklist").innerHTML+=
    '<li>'+task+
    '<button onClick="deleteTask(this)">Delete</button>'+
    '<button onClick="updateTask(this)">Update</button>'+'</li>';

    
}
function deleteTask(button){
    button.parentElement.remove();
}
function updateTask(button){
    const newTask=prompt("enter task");
    if(newTask){
        button.parentElement.firstChild.textContent=newTask+"";
    }
}