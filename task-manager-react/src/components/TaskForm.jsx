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
        <form onSubmit={handleSubmit}> 
            <input 
                type = "text" 
                value ={inputValue} 
                onChange={(e)=> setInputValue(e.target.value)} 
                placeholder="Add a new Task"/>
            <button type="submit">Add a New Task</button> 
        </form>
    );
}

export default TaskForm;
