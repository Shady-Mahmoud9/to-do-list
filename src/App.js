import { MdClose } from "react-icons/md";
import './App.css';
import { useState } from "react";

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);



  const addTask = (e) => {
    e.preventDefault(); 

    if (task) {
      const newTask = { id: new Date().getTime().toString(), title: task };
      setTasks([...tasks, newTask]);
      setTask('');
      
    }
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <h2>Shady's To-Do List</h2>
          <form onClick={addTask}>
            <input type="text" placeholder="Enter Task" value={task} onChange={(e) => setTask(e.target.value)} />
            <button type='submit'>ADD</button>
          </form>

          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                {task.title}
                <MdClose className="button" onClick={() => removeTask(task.id)} />
              </li>
            ))}
          </ul>

          <h3>You have {
            !tasks.length ? "no tasks" :
              tasks.length === 1 ? "1 task" :
                `${tasks.length} tasks`
          } to do</h3>

        </div>
      </header>
    </div>
  );
}

export default App;
