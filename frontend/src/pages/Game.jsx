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
    {/* {tasks.map((task) => (
      <TaskItem key={task.id} task={task} onToggle={handleToggle} />
    ))} */}
    
    </>
    
  )
}

export default Game;