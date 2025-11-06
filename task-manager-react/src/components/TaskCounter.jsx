function TaskCounter({ tasks }){
    const total = tasks.length;
    const numActive = tasks.filter(task => !task.completed).length;
    // const numCompleted = tasks.filter(task => task.completed).length;

    return(
        <span>{total}/{numActive}</span>
    )
}

export default TaskCounter;