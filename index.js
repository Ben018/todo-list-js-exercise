function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,

    logState: function () { // prints out the provided task's details
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function () { // marks the provided task as completed
      this.complete = true;
    }

  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

logTaskState(task1); // Clean Cat Litter has not been completed
completeTask(task1);
logTaskState(task1); // Clean Cat Litter has been completed

// for now, let's just make sure we see our task
console.log(tasks);