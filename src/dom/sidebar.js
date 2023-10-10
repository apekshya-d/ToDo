import { makeList, projectListArray } from "../lib/project";
import { buildMainSection } from "./mainSection";

export function buildSideBar() {
  const sideBar = document.querySelector("#sidebar");
  sideBar.innerHTML = "";
  const topBar = document.createElement("div");
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
      li.innerHTML = `<a href = '#'> ${projectListArray[i].name}</a>`;
      projectList.appendChild(li);
    }
  }

  bottomBar.append(projectList, plusBtn);

  sideBar.append(topBar, bottomBar);

  console.log(projectListArray);
  return sideBar;
}
