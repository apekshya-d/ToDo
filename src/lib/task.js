import { projectListArray } from "./project";

class Task {
  constructor(name, description, date) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.important = false;
  }

  setImportant() {
    if (this.important == false) {
      this.important = true;
    } else {
      this.important = false;
    }
  }
  remove() {
    for (let j = 0; j < projectListArray.length; j++) {
      if (projectListArray[j].taskList.includes(this)) {
        projectListArray[j].removeTask(this);
        break;
      }
    }
  }
}

export { Task };
