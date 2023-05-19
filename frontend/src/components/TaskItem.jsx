import React from "react";
import "./TaskItem.css";

const TaskItem = ({task, onToggle}) => {
    return (
        <div className="task-item">
        <h3>{task.title}</h3>
        <p>{task.weight}</p>
        <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
        />
        </div>
    );
}

export default TaskItem;