let taskFormEle = document.getElementById("task-form");
let taskInputEle = document.getElementById("task-ele");

let storedTasks = localStorage.getItem("tasks");
let tasks = storedTasks ? JSON.parse(storedTasks) : [];

function displayTasks(arr) {
  let eachObj = "";
  if (arr.length == 0) {
    document.getElementById("taskList-ele").innerHTML =
      "Your ToDo List is Empty, Please add Tasks...";
    return;
  }
  for (let obj of arr) {
    eachObj += `<li class="list-group-item fw-bold">
                  <span>${obj.taskName}</span>
                  <button class="btn btn-warning text-white btn-sm float-end" onclick="deleteTask(${obj.id});">Delete</button>
                  <button class="btn btn-warning text-white btn-sm float-end me-2" onclick="updateTask(${obj.id});">Update</button>
                </li>`;
    document.getElementById("taskList-ele").innerHTML = eachObj;
  }
}
displayTasks(tasks);

let taskId = null;

function saveUpdatedTask() {
  let selectedTask = tasks.find((val) => {
    return val.id == taskId;
  });

  if (taskInputEle.value == "") return;

  selectedTask.taskName = taskInputEle.value;
  let eleIndex = tasks.indexOf(selectedTask);
  tasks.splice(eleIndex, 1, selectedTask);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  taskInputEle.value = "";

  displayTasks(tasks);
}
let saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", saveUpdatedTask);

function updateTask(id) {
  taskId = id;

  let selectedTask = tasks.find((val) => {
    return val.id == id;
  });

  taskInputEle.value = selectedTask.taskName;
}


taskFormEle.addEventListener("submit", function (e) {
  e.preventDefault();
  let task = taskInputEle.value;
  if (task == "") return;

  let newObj = {};
  newObj.id = tasks.length + 1;
  newObj.taskName = task;
  tasks.push(newObj);

  localStorage.setItem("tasks",JSON.stringify(tasks));

  displayTasks(tasks);
  taskInputEle.value = "";
});

function deleteTask(id) {
  let selectedTask = tasks.find((val) => {
    return val.id == id;
  });

  let eleIndex = tasks.indexOf(selectedTask);
  tasks.splice(eleIndex, 1);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  displayTasks(tasks);
}
