import { Task } from "./task";

function makeList(title) {
  let newProject = new Project(title);
  projectListArray.push(newProject);
}

class Project {
  constructor(name) {
    this.name = name;
    this.taskList = [];
  }
  addTask(title) {
    let newTask = new Task(title);
    this.taskList.push(newTask);
  }
}

const projectListArray = [new Project("test1"), new Project("test2")];
export { makeList, projectListArray };
