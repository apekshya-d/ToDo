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
          <button class = "taskDeleteBtn">'X'</button>
          </div> `;
      taskList.appendChild(li);
      const taskDeleteBtn = li.querySelector(".taskDeleteBtn");
      taskDeleteBtn.addEventListener("click", () => {
        //page.taskList.splice(page.taskList[i], 1);
        page.removeTask(i);
        displayTaskList(page);
      });
    }
    mainSection.append(taskList);
  }
}

function buildForm(page) {
  const taskForm = document.createElement("div");

  const taskTitle = document.createElement("input");
  taskTitle.setAttribute("type", "text");
  taskTitle.setAttribute("name", "taskTitle");
  taskTitle.setAttribute("id", "taskTitle");
  const taskTitleLabel = document.createElement("label");
  taskTitleLabel.setAttribute("for", "taskTitle");
  taskTitleLabel.textContent = "Title";

  const taskDetails = document.createElement("input");
  taskDetails.setAttribute("type", "text");
  taskDetails.setAttribute("name", "taskDetails");
  taskDetails.setAttribute("id", "taskDetails");
  const taskDetailsLabel = document.createElement("label");
  taskDetailsLabel.setAttribute("for", "taskDetails");
  taskDetailsLabel.textContent = "Details";

  const taskDate = document.createElement("input");
  taskDate.setAttribute("type", "date");
  taskDate.setAttribute("name", "taskDate");
  taskDate.setAttribute("id", "taskDate");
  const taskDateLabel = document.createElement("label");
  taskDateLabel.setAttribute("for", "taskDate");
  taskDateLabel.textContent = "Date";

  const taskAdd = document.createElement("button");
  taskAdd.textContent = "Add";
  const taskCancel = document.createElement("button");
  taskCancel.textContent = "Cancel";

  taskAdd.addEventListener("click", () => {
    page.addTask(taskTitle.value, taskDetails.value, taskDate.value);
    taskForm.parentElement.removeChild(taskForm);
    buildMainSection(page);
  });

  taskCancel.addEventListener("click", () => {
    taskForm.parentElement.removeChild(taskForm);
  });
  taskForm.append(
    taskTitleLabel,
    taskTitle,
    taskDetailsLabel,
    taskDetails,
    taskDateLabel,
    taskDate,
    taskAdd,
    taskCancel
  );
  return taskForm;
}

export { buildMainSection };
