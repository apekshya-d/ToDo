import { makeList, fakeListArray } from "../lib/list";

export function buildSideBar() {
  const sideBar = document.querySelector("#sidebar");
  const topBar = document.createElement("div");
  const bottomBar = document.createElement("div");
  sideBar.innerHTML = "";

  const plusBtn = document.createElement("button");
  plusBtn.addEventListener("click", () => {
    const makeListContainer = document.createElement("div");
    const listNameInput = document.createElement("input");
    listNameInput.setAttribute("type", "text");
    listNameInput.setAttribute("placeholder", "Project Name");

    const addBtn = document.createElement("button");
    addBtn.addEventListener("click", () => {
      makeList(listNameInput.value);
      buildSideBar();
      makeListContainer.classList.add("hide");
    });

    const cancelBtn = document.createElement("button");

    makeListContainer.append(listNameInput, addBtn, cancelBtn);
    bottomBar.append(makeListContainer);
  });

  const list = document.createElement("ul");
  list.setAttribute("id", "list");
  displayList();

  function displayList() {
    for (let i = 0; i < fakeListArray.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = fakeListArray[i].name;
      list.appendChild(li);
    }
  }

  bottomBar.append(list, plusBtn);

  sideBar.append(topBar, bottomBar);

  console.log(fakeListArray);
  return sideBar;
}
