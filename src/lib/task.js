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
}

export { Task };
