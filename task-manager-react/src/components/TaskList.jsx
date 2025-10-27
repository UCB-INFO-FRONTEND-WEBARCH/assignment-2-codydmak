import {onDelete} from "react"
import {onToggle} from "react"

import TaskItem from "./TaskItem";

function TaskList({tasks, onToggle, onDelete}){
    return(
        console.log("hello")
        // <ul className ="main-list">
        //     {tasks.map((task) =>(
        //         <TaskItem
        //         key ={task.id}
        //         task = {task}
        //         onToggle ={onToggle}
        //         onDelete = {onDelete}
        //         />
        //     ))}
        // </ul>
    )
}

export default TaskList;