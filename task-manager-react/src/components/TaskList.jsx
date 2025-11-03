import {onDelete} from "react"
import {onToggle} from "react"

import TaskItem from "./TaskItem";

function TaskList({tasks, onToggle, onDelete}){
    
    return(
        <ul className ="main-list">
            {tasks.map((task) =>(
                <TaskItem
                    key ={task.id}
                    text = {task.text} // not text
                    onToggle ={onToggle}
                    onDelete = {onDelete}
                />
            ))}
        </ul>
    )
}

export default TaskList;