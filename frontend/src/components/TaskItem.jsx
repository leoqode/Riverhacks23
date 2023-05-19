import React from "react";
import "./TaskItem.css";
import droplet from "../assets/droplet.png";

const TaskItem = ({task, onToggle, font}) => {
    return (
        <div className="task-item" onClick={() => onToggle(task)}>
            <h3 style={{fontFamily:'Jost'}} >{task.title}</h3>
            <div className="task-rewards">
                <div style={{fontFamily:'Jost'}} className="point">
                    {task.weight}<img src={droplet} alt="droplet"/>
                </div>
            </div>
        </div>
    );
}

export default TaskItem;

