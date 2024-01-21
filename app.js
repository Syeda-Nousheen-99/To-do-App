
var currentEditIndex = -1;

function openPopup() {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("taskInput").value = "";
    currentEditIndex = -1;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    if (currentEditIndex === -1) {
        
        var li = document.createElement("li");
        li.innerHTML = `<span>${taskText}</span> 
                        <button class="more-btn" onclick="showMoreOptions(event)">
                            <i class="fas fa-ellipsis-h"></i>
                        </button>
                        <div class="options-popup" style="display: none;">
                            <button onclick="editTask(${taskList.children.length}, '${taskText}')">
                                <i class="fas fa-edit"></i> 
                            </button>
                            <button onclick="deleteTask(${taskList.children.length})">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                            <button onclick="completeTask(${taskList.children.length})">
                                <i class="fas fa-check"></i> 
                            </button>
                        </div>`;
        taskList.appendChild(li);
    } else {
       
        var liToEdit = taskList.children[currentEditIndex];
        liToEdit.innerHTML = `<span>${taskText}</span> 
                              <button class="more-btn" onclick="showMoreOptions(event)">
                                  <i class="fas fa-ellipsis-h"></i>
                              </button>
                              <div class="options-popup" style="display: none;">
                                  <button onclick="editTask(${currentEditIndex}, '${taskText}')">
                                      <i class="fas fa-edit"></i>
                                  </button>
                                  <button onclick="deleteTask(${currentEditIndex})">
                                      <i class="fas fa-trash-alt"></i> 
                                  </button>
                                  <button onclick="completeTask(${currentEditIndex})">
                                      <i class="fas fa-check"></i> Complete
                                  </button>
                              </div>`;
        currentEditIndex = -1;
    }

    taskInput.value = "";
    closePopup();
}

function showMoreOptions(event) {
    var optionsPopup = event.target.nextElementSibling;
    optionsPopup.style.display = optionsPopup.style.display === "none" ? "block" : "none";
}

function editTask(index, text) {
    openPopup();
    document.getElementById("taskInput").value = text;
    currentEditIndex = index;
}

function deleteTask(index) {
    var taskList = document.getElementById("taskList");
    taskList.removeChild(taskList.children[index]);
}

function completeTask(index) {
    var taskList = document.getElementById("taskList");
    var li = taskList.children[index];
    li.classList.toggle("completed");
}
