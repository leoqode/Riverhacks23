import TaskItem from "../components/TaskItem.jsx";
import React from "react";
import { useState } from "react";
import sampleTasks from "../json/sampleTasks.json";
import HealthDimensions from "../components/HealthDimensions.jsx";
import SaplingView from "../components/SaplingView.jsx";

function Game() {
  
  const [dimension, setDimension] = useState("Physical");

  const tasks = sampleTasks;

  const handleChangeDimensions = (dimension) => {
    setDimension(dimension);
  };
  
  const handleToggle = (taskId) => {
    console.log("Task toggled:", taskId);
  };

  return (
    <>
    <SaplingView/>
    <HealthDimensions handleChange={handleChangeDimensions}/>
    {sampleTasks[dimension].map((task) => (
        <TaskItem key={task.title} task={task} onToggle={handleToggle}/>
      ))}


    </>
    
  )
}

export default Game;