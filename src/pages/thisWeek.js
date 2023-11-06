import { projectListArray } from "../lib/project";

class ThisWeekPage {
  constructor() {
    this.name = "Next 7 Days";
  }

  get taskList() {
    let taskList = [];
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    let week = today.valueOf() + 7 * 24 * 60 * 60 * 1000;
    for (let i = 0; i < projectListArray.length; i++) {
      for (let j = 0; j < projectListArray[i].taskList.length; j++) {
        let taskDateArr = projectListArray[i].taskList[j].date.split("-");
        let taskTimestamp = new Date(
          taskDateArr[0],
          taskDateArr[1] - 1,
          taskDateArr[2]
        ).valueOf();
        if (today.valueOf() <= taskTimestamp && taskTimestamp < week) {
          taskList.push(projectListArray[i].taskList[j]);
        }
      }
    }
    return taskList;
  }
}

export { ThisWeekPage };
