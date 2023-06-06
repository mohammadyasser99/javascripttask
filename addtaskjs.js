const tasks = [];
const addTask= function (){
    const taskName = document.getElementById("taskName").value;
    const priority = document.getElementById("priority").value;
    //validation
const task = {name:taskName ,priority: priority}
    const isValid = validate(taskName , priority);
    if(isValid){
        alert("please");
        return;
    }

    1
addTaskTOList(task);
renderTaskTable();

};
const validate = function(task){
    if(!task.name) return false;
    if (isNaN(Number(task.priority)) || Number(task.priority) < 1) return false;
    return true;
};


const renderTaskTable = function(){

let tbody ="";
for(let i =0;i<tasks.length;i++ ){
tbody +=getTableRow(i,tasks[i]);


}
document.getElementById("task-list").innerHTML=tbody

};

function addTaskTOList (task){
    tasks.push(task);
};

const getTableRow = function (i,task){
   let tr = '<tr><td>'+(i+1)+'</td><td>'+task.name+'</td><td>'+task.priority +'</td><td><button class="btn btn-danger" onclick = "deleteTask('+i+')">Delete</button>'+

   '</td></tr>';
   return tr;
};

const deleteTask = function(i){

    tasks.splice(i,1);
    renderTaskTable();
}