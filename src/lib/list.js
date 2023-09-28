const fakeListArray = [
  { name: "firstToDo", taskList: [{}, {}], addTask() {} },
  { name: "secondToDo", taskList: [{}, {}], addTask() {} },
];

function makeList(title) {
  fakeListArray.push(title);
}

export { makeList, fakeListArray };
