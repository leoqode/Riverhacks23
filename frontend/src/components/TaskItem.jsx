import React from "react";
import "./TaskItem.css";
import droplet from "../assets/droplet.png";

const TaskItem = ({task, onToggle}) => {
    return (
        <div className="task-item">
        <span><input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
        /></span>
        <h3>{task.title}</h3>
        <div className="task-weight">
        {task.weight}<img className="point" src={droplet} alt="droplet"/>
        </div>
        </div>
    );
}

export default TaskItem;