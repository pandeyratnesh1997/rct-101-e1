import React, {useState} from "react";
import styles from "./taskApp.module.css";
import AddTask from "./AddTask/AddTask";
import TaskHeader from "./TaskHeader/TaskHeader";
import Tasks from "./Tasks/Tasks";

const TaskApp = ({tasks}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [task,setTask] = useState([]);
 
  const addTask =(taskInput)=>{
    tasks.push({id : Date.now(), text : taskInput, done : false, count:0 })
    setTask([...tasks]);
    // setTaskInput("");
   
  }

  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}
      <TaskHeader/>
      <AddTask  task={task} setTask={setTask} addTask={addTask}/>
      <Tasks  task={task} setTask={setTask}/>
    </div>
  );
};


export default TaskApp;
