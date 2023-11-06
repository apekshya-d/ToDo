import { Task } from "./task";

function makeList(title) {
  let newProject = new Project(title);
  projectListArray.push(newProject);
  return newProject;
}

class Project {
  constructor(name) {
    this.name = name;
    this.taskList = [];
  }
  addTask(name, description, date) {
    let newTask = new Task(name, description, date);
    this.taskList.push(newTask);
  }
  removeTask(task) {
    let index = this.taskList.indexOf(task);
    this.taskList.splice(index, 1);
  }
}

const projectListArray = [new Project("test1"), new Project("test2")];
export { makeList, projectListArray, Project };
