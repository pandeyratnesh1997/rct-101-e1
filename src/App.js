import React from "react";
import './App.css'
import TaskApp from "./components/TaskApp";
import tasks from './data/tasks.json';

function App() {
  return <div  className="cont">{/* Code Here */}
        <TaskApp tasks={tasks}/>

  </div>;
}

export default App;
