import TaskItem from "./TaskItem";

function TaskList({tasks, deleteTask, toggleTask}){
    
    return(
        <ul className ="main-list">
            {tasks.map((task) =>(
                <TaskItem
                    key ={task.id}
                    task = {task}
                    text = {task.text} // not text
                    deleteTask = {deleteTask}
                    toggleTask = {toggleTask}
                />
            ))}
        </ul>
    )
}

export default TaskList;