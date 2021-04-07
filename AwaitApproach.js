function TaskToRunAfterLongTask() {
  return new Promise((resolve, reject) => {
    console.log("Done B");
    return resolve();
  });
}

function LongRunningTask() {
  return new Promise(function(resolve, reject) {
    console.log("Running task A");
    setTimeout(() => {
      console.log("Done A");
      return resolve();
    }, 2000);
  });
}
//Note: The await functions should be called from a async function
async function syncExecutionFlow() {
  try {
    var taskA = await LongRunningTask();
    var taskB = await TaskToRunAfterLongTask();
  } catch (err) {
    console.log(err => errorMessage);
  }
}
syncExecutionFlow();
//Advantage of this approach compared to Promise
//is we can write the flow like a normal synchronous coding style
//
