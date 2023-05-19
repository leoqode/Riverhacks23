import TaskItem from "../components/TaskItem.jsx";
import React from "react";
import sampleTasks from "../json/sampleTasks.json";
import HealthDimensions from "../components/HealthDimensions.jsx";

function Game() {
  
  const tasks = sampleTasks;
  
  const handleToggle = (taskId) => {
    console.log("Task toggled:", taskId);
  };

  return (
    <>
    <HealthDimensions />
    {Object.values(tasks).flatMap((dimensionTasks) =>
        dimensionTasks.map((task) => (
          <TaskItem key={task.title} task={task} onToggle={handleToggle} />
        ))
      )}


    </>
    
  )
}

export default Game;