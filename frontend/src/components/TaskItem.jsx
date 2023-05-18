import TaskItem from "../components/TaskItem.jsx";
import React from "react";
import sampleTasks from "../json/sampleTasks.json";

function Game() {
  
  const tasks = sampleTasks;
  
  const handleToggle = (taskId) => {
    console.log("Task toggled:", taskId);
  };

  return (
    <>
    Game
    {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={handleToggle} />
      ))}
    </>
  )
}

export default Game;