import React, { useState } from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";


const Tasks = ({task,setTask}) => {
  // NOTE: do not delete `data-cy` key value pair
  // console.log(tasks)

  const removeTask=(id)=>{
    let updatedTask = task.filter((item)=> item.id !=id);
    setTask(updatedTask);
    
  }
  
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {task.map((item)=>{
          return(
            <Task key={item.id} item={item} removeTask={removeTask}/>
          )
          
        })}
        
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
