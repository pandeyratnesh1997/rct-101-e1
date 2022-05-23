import React, { useState } from "react";
import styles from "./task.module.css";
import Counter from '../Counter/Counter'
const Task = ({item,removeTask}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [status,setStatus] = useState(item.done);

  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" checked={status}
        onChange={(e)=>{
          setStatus(e.target.checked);
        }}
      />
      <div data-cy="task-text"  className={status ? styles.striked : ""}>{item.text}</div>
      {/* Counter here */}
      <Counter count={item.count}/>
      <button data-cy="task-remove-button" className={styles.btn} onClick={()=>removeTask(item.id)}> x </button>
    </li>
  );
};

export default Task;
