import { projectListArray } from "../lib/project";

class ImportantPage {
  constructor() {
    this.name = "Important";
  }

  get taskList() {
    let taskList = [];
    for (let i = 0; i < projectListArray.length; i++) {
      for (let j = 0; j < projectListArray[i].taskList.length; j++) {
        if (projectListArray[i].taskList[j].important) {
          taskList.push(projectListArray[i].taskList[j]);
        }
      }
    }
    return taskList;
  }
}

export { ImportantPage };
