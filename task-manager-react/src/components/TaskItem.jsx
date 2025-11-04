function TaskItem({text, task, deleteTask, toggleTask}) {
    return(
        <li className="container">
            <div className="task-line">
                <button className="radio-button" onClick ={()=> toggleTask(task.id)} ></button>
                <p className={`task-label ${task.completed ? "completed" :""}`} >{text}</p>
            </div>
            <img onClick ={()=>deleteTask(task.id)} src="assets/delete_icon.png" alt="Delete" className="nav-item"/>
        </li>

    )
}
export default TaskItem;