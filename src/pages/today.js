import { projectListArray } from "../lib/project";

class TodayPage {
  constructor() {
    this.name = "Today";
    this.taskList = [];

    for (let i = 0; i < projectListArray.length; i++) {
      for (let j = 0; j < projectListArray[i].taskList.length; j++) {
        let today = new Date().toISOString().slice(0, 10);
        if (today === projectListArray[i].taskList[j].date) {
          this.taskList.push(projectListArray[i].taskList[j]);
        }
      }
    }
  }
}

export { TodayPage };
