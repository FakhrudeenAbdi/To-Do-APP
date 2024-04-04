// const taskInput = document.getElementById("task-input");

// const addTaskBtn = document.getElementById("add-task-btn");

// const taskList = document.getElementById("task-list");

// addTaskBtn.addEventListener("click", function() {

//   const taskText = taskInput.value;

//   if (taskText.trim() !== "") {

//     const taskItem = document.createElement("li");

//     taskItem.innerText = taskText;

//     taskItem.addEventListener("click", function() {

//       taskItem.remove();

//     });

//     taskList.appendChild(taskItem);

//     taskInput.value = "";

//   }

// });


// taskList.addEventListener("click", function(event) {

//   if (event.target.tagName.toLowerCase() === "li") {

//     event.target.remove();

//   }

// });





const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');


function addTask() {
    const taskText = taskInput.value;

    if (taskText) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.textContent = 'X';
        removeBtn.addEventListener('click', removeTask);

        taskItem.appendChild(removeBtn);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }
}


function removeTask(event) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
}


addBtn.addEventListener('click', addTask);
