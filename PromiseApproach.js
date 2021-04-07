var taskA = function LongRunningTask() {
  return new Promise(function(resolve, reject) {
    console.log("Running task A");
    setTimeout(() => {
      console.log("Done A");
      return resolve();
    }, 2000);
  });
};

var taskB = function TaskToRunAfterLongTask() {
  return new Promise((resolve, reject) => {
    console.log("Done B");
    return resolve();
  });
};

taskA()
  .then(result => {
    taskB();
  })
  .catch(err => {
    console.log(err.message);
  });

//Advantage is that we can write function much cleaner way
// ie can avoid passing nested callback argument to functions
// and can write the execution order in much cleaner way
// task1()
//      .then(task2())
//      .then(task3())
//      .catch( handle exception catch )
