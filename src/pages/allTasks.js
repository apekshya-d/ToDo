import { projectListArray } from "../lib/project";

class AllTaskPage {
  constructor() {
    this.name = "All Tasks";
    this.taskList = [];

    for (let i = 0; i < projectListArray.length; i++) {
      this.taskList = this.taskList.concat(projectListArray[i].taskList);
    }
  }
}

export { AllTaskPage };
