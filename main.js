document.getElementById("task-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const taskInput = document.getElementById("new-task");
  const task = taskInput.value.trim();
  if (task !== "") {
    addTask(task);
    taskInput.value = ""; // Clear input after adding
  }
});

function addTask(task) {
  const taskList = document.getElementById("task-list");
  const li = document.createElement("li");
  li.textContent = task;
  li.className = "py-2 px-4 hover:bg-gray-100 cursor-pointer";

  // Add delete button
  const deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteBtn.className = "text-red-500 float-right cursor-pointer";
  deleteBtn.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}
