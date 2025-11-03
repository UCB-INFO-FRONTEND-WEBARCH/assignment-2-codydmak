import {onDelete} from "react"
import {completed} from "react"

function TaskItem({completed, onToggle, text}) {
    return(
        <label className="container">
            <input type="checkbox" checked={completed} onChange={onToggle}/>
            <span className="radio-button"></span>
            <p>{text}</p>
        </label>

    )
}
export default TaskItem;