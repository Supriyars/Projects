document.getElementById("add-task-btn").addEventListener("click", addTask);
function addTask(){
   const taskInput = document.getElementById("task-input");
   const taskText = taskInput.value.trim();
   if(taskText === " "){
    alert("Please enter the task!");
    return;
   }
   const li = document.createElement("li");
   li.textContent= taskText;
   li.addEventListener("click", () =>{
    li.classList.toggle("completed");
   });
   li.addEventListener("contextmenu",(e) =>{
    e.preventDefault();
    li.remove();
   });
   document.getElementById("task-list").appendChild(li);
   taskInput.value = " ";
}

