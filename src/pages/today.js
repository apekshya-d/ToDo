import { projectListArray } from "../lib/project";

class TodayPage {
  constructor() {
    this.name = "Today";
  }

  get taskList() {
    let taskList = [];
    for (let i = 0; i < projectListArray.length; i++) {
      for (let j = 0; j < projectListArray[i].taskList.length; j++) {
        let today = new Date().toISOString().slice(0, 10);
        if (today === projectListArray[i].taskList[j].date) {
          taskList.push(projectListArray[i].taskList[j]);
        }
      }
    }
    return taskList;
  }
}

export { TodayPage };
