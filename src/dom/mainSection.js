function buildMainSection(page) {
  const mainSection = document.querySelector("#mainSection");

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
