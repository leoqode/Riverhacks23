import React from "react";
import "./TaskItem.css";
import droplet from "../assets/droplet.png";

const TaskItem = ({task, onToggle}) => {
    return (
        <div className="task-item">
        <h3>{task.title}</h3>
        <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
        />
        <div>{task.weight}<img class="point" src={droplet} alt="droplet" /></div>
        </div>
    );
}

export default TaskItem;