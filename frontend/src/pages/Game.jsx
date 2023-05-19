import TaskItem from "../components/TaskItem.jsx";
import React from "react";
import { useState } from "react";
import sampleTasks from "../json/sampleTasks.json";
import HealthDimensions from "../components/HealthDimensions.jsx";
import SaplingView from "../components/SaplingView.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Game.css';

function Game() {
  
  const [dimension, setDimension] = useState("Physical");
  const [activeTask, setActiveTask] = useState(null);

  const tasks = sampleTasks;

  const handleChangeDimensions = (dimension) => {
    setDimension(dimension);
  };
  
  const handleToggle = (task) => {
    setActiveTask(task)
    // TODO link to api create task 
  };

  const handlePost = (task) => {
    console.log("Task posted:", task);
    // TODO link to api create post
    setActiveTask(null)
  }

  const handleMakeTask = (task) => {
    console.log("Task made:", task);
    setActiveTask(null)
  }

  return (
    <>
    <SaplingView/>
    <HealthDimensions handleChange={handleChangeDimensions}/>
    {sampleTasks[dimension].map((task) => (
        <TaskItem key={task.title} task={task} onToggle={handleToggle}/>
      ))}
    {activeTask ?
        <div className="modall">
        Do you want to publicly post this?  
        <button className="yes-btn btn" onClick={() => handlePost(activeTask)}>Yes</button>
        <button className="no-btn btn" onClick={() => handleMakeTask(activeTask)}>No</button>
      </div> : null
  }


    </>
    
  )
}

export default Game;