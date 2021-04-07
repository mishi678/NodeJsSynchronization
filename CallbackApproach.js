//Callback approach

var taskA = function LongRunningTask(callBackTaskB) {
  console.log("Running Task A");
  setTimeout(() => {
    console.log("Completed Task A, calling callback function");
    callBackTaskB("xyz");
  }, 2000);
};
var taskB = function TaskToRunAfterLongTask(data) {
  console.log("Done Task B, data from Task A:", data);
};

taskA(taskB);

// This approach is not good if too many nested synchronous operations to be carried out
