import { makeList, projectListArray } from "../lib/project";
import { buildMainSection } from "./mainSection";
import { AllTaskPage } from "../pages/allTasks";
import { TodayPage } from "../pages/today";

export function buildSideBar() {
  const sideBar = document.querySelector("#sidebar");
  sideBar.innerHTML = "";

  const topBar = document.createElement("div");
  topBar.innerHTML = `
    <a class = "taskSelector" href = '#' data-page="allTask">All Tasks</a>
    <a class = "taskSelector" href = '#' data-page="today">Today</a>
    <a class = "taskSelector" href = '#' data-page="7days">7 Days</a>
    <a class = "taskSelector" href = '#' data-page="important">Important</a>
  `;

  const allTask = topBar.querySelectorAll(".taskSelector");
  for (let task of allTask) {
    task.addEventListener("click", (e) => {
      switch (e.target.dataset.page) {
        case "allTask":
          buildMainSection(new AllTaskPage());
          break;
        case "today":
          buildMainSection(new TodayPage());
          break;
        case "7days":
          break;
        case "important":
          break;
      }
    });
  }

  const bottomBar = document.createElement("div");

  const plusBtn = document.createElement("button");
  plusBtn.addEventListener("click", () => {
    const makeListContainer = document.createElement("div");
    const listNameInput = document.createElement("input");
    listNameInput.setAttribute("type", "text");
    listNameInput.setAttribute("placeholder", "Project Name");

    const addBtn = document.createElement("button");
    addBtn.addEventListener("click", () => {
      const currentObj = makeList(listNameInput.value);
      buildSideBar();
      buildMainSection(currentObj);
      makeListContainer.classList.add("hide");
    });

    const cancelBtn = document.createElement("button");

    makeListContainer.append(listNameInput, addBtn, cancelBtn);
    bottomBar.append(makeListContainer);
  });

  const projectList = document.createElement("ul");
  projectList.setAttribute("id", "projectList");
  displayProjectList();

  function displayProjectList() {
    for (let i = 0; i < projectListArray.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = `<a class = "currentProject" href = '#'> ${projectListArray[i].name}</a>`;
      projectList.appendChild(li);

      let currentProject = li.querySelector(".currentProject");
      currentProject.addEventListener("click", () => {
        buildMainSection(projectListArray[i]);
      });
    }
  }

  bottomBar.append(projectList, plusBtn);

  sideBar.append(topBar, bottomBar);

  console.log(projectListArray);
  return sideBar;
}
