import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({task,setTask,addTask}) => {
  // NOTE: do not delete `data-cy` key value pair 
  const [taskInput, setTaskInput] = useState("");
  
 
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text"  placeholder="Add Task..."
       onChange={(e)=>setTaskInput(e.target.value)}/>
      <button data-cy="add-task-button" onClick={()=>addTask(taskInput)}>+</button>
    </div>
  );
};

export default AddTask;
