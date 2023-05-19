import React from "react";
import "./TaskItem.css";
import droplet from "../assets/droplet.png";

const TaskItem = ({task, onToggle}) => {
    return (
        <div className="task-item" onClick={() => onToggle(task)}>
            <h3>{task.title}</h3>
            <div className="task-rewards">
                <div className="point">
                    {task.weight}<img src={droplet} alt="droplet"/>
                </div>
            </div>
        </div>
    );
}

export default TaskItem;

