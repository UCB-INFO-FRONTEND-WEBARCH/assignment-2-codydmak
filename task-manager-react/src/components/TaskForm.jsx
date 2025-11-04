import {useState} from "react"

function TaskForm ({onAddTask}){
    const [inputValue, setInputValue] = useState(""); //instantiates inputValue with an empty string

    const handleSubmit = (e) =>{ //prevents having nothing and page refresh
        e.preventDefault();
        if (inputValue.trim() == "") return;
        onAddTask(inputValue);
        setInputValue("");
    };

    return (
        <form className ="task-form" onSubmit={handleSubmit}> 
            <input 
                className="task-input"
                type = "text" 
                value ={inputValue} 
                onChange={(e)=> setInputValue(e.target.value)} 
                placeholder="Add a new Task"/>
            <button className= "form-button" type="submit">Add Task</button> 
        </form>
    );
}

export default TaskForm;
