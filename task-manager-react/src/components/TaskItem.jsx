function TaskItem({text, completed, onToggle}) {
    return(
        <label className="container">
            <input type="checkbox" checked={completed} onchange={onToggle}/>
            <span className="radio-button"></span>
            <p>{text}</p>
        </label>



    )
}

export default TaskItem;