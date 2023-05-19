import React from "react";
import "./TaskItem.css";
import droplet from "../assets/droplet.png";

const TaskItem = ({task, onToggle}) => {
    return (
        <div className="task-item">
        <h3>{task.title}</h3>
        <p>{task.weight}</p>
        <img src={droplet} alt="droplet" />
        <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
        />
        </div>
    );
}

export default TaskItem;