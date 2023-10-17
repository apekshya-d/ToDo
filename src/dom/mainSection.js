import { buildSideBar } from "./sidebar";

function buildMainSection(page) {
  const mainSection = document.querySelector("#mainSection");
  mainSection.innerHTML = "";

  if (page === undefined) {
    return;
  }

  const projectTitle = document.createElement("h3");
  projectTitle.textContent = page.name;

  mainSection.append(projectTitle);

  if (
    projectTitle.textContent !== "All Tasks" &&
    projectTitle.textContent !== ""
  ) {
    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "Add Task";
    addTaskBtn.setAttribute("id", "addTaskBtn");
    mainSection.append(addTaskBtn);

    addTaskBtn.addEventListener("click", () => {
      mainSection.append(buildForm(page));
    });
  }
  const taskList = document.createElement("ul");
  taskList.setAttribute("id", "taskList");
  displayTaskList(page);

  function displayTaskList(page) {
    taskList.innerHTML = "";
    for (let i = 0; i < page.taskList.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = `<div>
          <h4>${page.taskList[i].name}</h4>
          <div class = "taskDescription"> ${page.taskList[i].description}</div>
          <div class = "taskDate">${page.taskList[i].date}</div>
          <button class = "taskImportantBtn">Important</button>
          <button class = "taskEditBtn">Edit</button>
          <button class = "taskDeleteBtn">✖️</button>
          </div> `;
      taskList.appendChild(li);

      const taskImportantBtn = li.querySelector(".taskImportantBtn");
      if (page.taskList[i].important) {
        taskImportantBtn.style.color = "yellow";
      } else {
        taskImportantBtn.style.color = "black";
      }

      taskImportantBtn.addEventListener("click", () => {
        page.taskList[i].setImportant();
        displayTaskList(page);
      });

      const taskEditBtn = li.querySelector(".taskEditBtn");
      taskEditBtn.addEventListener("click", () => {
        mainSection.append(editTask(page.taskList[i], page));
      });

      const taskDeleteBtn = li.querySelector(".taskDeleteBtn");
      taskDeleteBtn.addEventListener("click", () => {
        page.removeTask(i);
        displayTaskList(page);
      });
    }
    mainSection.append(taskList);
  }
}

function buildForm(page) {
  const taskForm = document.createElement("form");
  taskForm.innerHTML = `
    <div>
    <label for = "taskTitle">Title</label>
    <input type = "text" name = "taskTitle" id="taskTitle"></input>
    <label for = "">Details</label>
    <input type = "text" name = "taskDetails" id = "taskDetails"></input>
    <label for = "taskDate"></label>
    <input type = "date" name = "taskDate" id = "taskDate"></input>
    <button id = "taskAddBtn">Add</button>
    <button id = "taskCancelBtn">Cancel</button>
    </div>
  `;

  const taskTitle = taskForm.querySelector("#taskTitle");
  const taskDetails = taskForm.querySelector("#taskDetails");
  const taskDate = taskForm.querySelector("#taskDate");
  const taskCancelBtn = taskForm.querySelector("#taskCancelBtn");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page.addTask(taskTitle.value, taskDetails.value, taskDate.value);
    taskForm.parentElement.removeChild(taskForm);
    buildMainSection(page);
  });

  taskCancelBtn.addEventListener("click", () => {
    taskForm.parentElement.removeChild(taskForm);
  });

  return taskForm;
}

function editTask(task, page) {
  let editTaskForm = document.createElement("form");
  editTaskForm.innerHTML = `
  <div>
  <label for = "taskTitle">Title</label>
  <input type = "text" name = "taskTitle" id="taskTitle"></input>
  <label for = "">Details</label>
  <input type = "text" name = "taskDetails" id = "taskDetails"></input>
  <label for = "taskDate"></label>
  <input type = "date" name = "taskDate" id = "taskDate"></input>
  <button id = "taskUpdateBtn">Update</button>
  <button >Cancel</button>
  </div>
  `;

  const taskTitle = editTaskForm.querySelector("#taskTitle");
  taskTitle.value = task.name;
  const taskDetails = editTaskForm.querySelector("#taskDetails");
  taskDetails.value = task.description;
  const taskDate = editTaskForm.querySelector("#taskDate");
  taskDate.value = task.date;

  function updateTask(task) {
    task.name = taskTitle.value;
    task.description = taskDetails.value;
    task.date = taskDate.value;
  }

  editTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    updateTask(task);
    editTaskForm.parentElement.removeChild(editTaskForm);
    buildMainSection(page);
  });

  return editTaskForm;
}

export { buildMainSection };
