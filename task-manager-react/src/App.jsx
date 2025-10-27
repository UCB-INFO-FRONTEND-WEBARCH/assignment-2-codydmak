import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (taskText) => {
    // Add new task to state
    const newTask ={
      id: Date.now(),
      text: taskText,
      completed: false
    };

    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>task.id ==id ?{...task, completed: !task.completed}: task))
    // Toggle task completion
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task=>task.id!=id))
    // Remove task from state
  };

  const filterTask = () =>{
    if(tasks.completed == true){
      return tasks.filter(task => task.completed)
    }
    else if (tasks.completed == false){
      return tasks.filter(task => !task.completed)
    }
    else{
      return tasks;
    }
  }

  // return (
  //   <div className="app">
  //     <TaskForm onAddTask={addTask} />
  //     <TaskCounter tasks={tasks} />
  //     <TaskList 
  //       tasks={tasks} 
  //       onToggle={toggleTask}
  //       onDelete={deleteTask}
  //     />
  //   </div>
  // );
  return (
    <>
      <body className = "page">
          <header>
            <div className="site-header">
                <button className="menu-icon">
                  <img src="assets/menu_icon.png" alt="Menu" className="menu-icon"/>
                </button>
                <form>
                    <label className="search-container">
                        <img className = "search-icon" src="assets/search_icon.png"></img>
                        <input className = "search-input" type = "search" placeholder="Quick Find"/>
                    </label>
                </form>
                <div className="site-header_status">
                    <img src="assets/check_icon.png" alt="Inbox" className="nav-item"/>
                    <span> 30/5 </span>
                </div>
            </div>
        </header>
        <main className='site-main'>
            <aside className ='side-content'>

              <ul className="nav-list">
                  <li><img src="assets/inbox_icon.png" alt="Inbox" className="nav-item"/>
                      <h1 className="nav-item-label">Inbox</h1>
                      <h2 className="count">5</h2>
                  </li>
                  <li><img src="assets/calendar_icon.png" alt="Today" className="nav-item"/>
                      <h1 className="nav-item-label">Today</h1>
                      <h2 className="count">5</h2>
                  </li>
                  <li><img src="assets/calendar_icon.png" alt="Upcoming" className="nav-item"/>
                      <h1 className="nav-item-label">Upcoming</h1>
                      <h2 className="count"></h2>
                  </li>
              </ul>
            </aside>
            <section className ="main-content">
                <h1>Inbox</h1>
                <TaskForm onAddTask ={addTask}/>
                <ul className ="main-list">
                    <label className="container">
                        <input type="checkbox" checked="checked"/>
                        <span className="radio-button"></span>
                        <p>Call Mom</p>
                    </label>
                    <label className="container">
                        <input type="checkbox" checked="checked"/>
                        <span className="radio-button"></span>
                        <p>Buy the new issue of Scientific American</p>
                    </label>
                    <label className="container">
                        <input type="checkbox" checked="checked"/>
                        <span className="radio-button"></span>
                        <p>Return the textbook to Josie</p>
                    </label>
                    <label className="container">
                        <input type="checkbox" checked="checked"/>
                        <span className="radio-button"></span>
                        <p>Buy the new album by Rake</p>
                    </label>
                    <label className="container">
                        <input type="checkbox" checked="checked"/>
                        <span className="radio-button"></span>
                        <p>Buy a gift card for Dad</p>
                    </label>
                </ul>
            </section>
        </main>
      </body>
      
    
    </>
    
  );
  

}

export default App
