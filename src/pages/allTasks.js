import { projectListArray } from "../lib/project";

class AllTaskPage {
  constructor() {
    this.name = "All Tasks";
  }

  get taskList() {
    let taskList = [];
    for (let i = 0; i < projectListArray.length; i++) {
      taskList = taskList.concat(projectListArray[i].taskList);
    }
    return taskList;
  }
}

export { AllTaskPage };
