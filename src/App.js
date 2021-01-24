import './App.css';
import Header  from "./components/Header";
import { useEffect, useState } from "react";
import Tasks from './components/Tasks';
import Addtask from './components/Addtask'
import  React, { Component }  from "react";
function App() {
 
  const [tasks, setTasks] = useState([])
  const [form,setForm] = useState({
  showForm: false
})

//add task 
const addTask = async (input)=>{
  
  const id = tasks.length===0?0:tasks[tasks.length-1].id+1;
  await fetch(`http://localhost:5000/tasks`,{
  method:"POST",
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({id,...input})
  
})
.then(response => response.json())
.then(data => console.log(data))
  setTasks([...tasks,{id,...input}])
}

useEffect(() => {
  fetch("http://localhost:5000/tasks")
    .then(res =>res.json())
    .then(
      (res) => {
        console.log(res)
        setTasks(res);
      },
     
      (error) => {
        console.log(error)
      }
    )
}, [])
 

//delete task
const deleteTask= async (id)=>{
await fetch(`http://localhost:5000/tasks/${id}`,{
  method:"DELETE"
})
  setTasks(tasks.filter((task)=>task.id !== id))
}

//toggle reminder
const toggleReminder= async (id)=>{
  setTasks(tasks.map((task)=>task.id===id?
  {...task, reminder:!task.reminder}:task))

  await fetch(`http://localhost:5000/tasks/${id}`,{
    method:"PATCH",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({reminder: !tasks.filter((task)=>task.id === id)[0].reminder })
   })
   .then(response => response.json())
  .then(data => console.log(data))
}


  return (
    <div className="App container">
      <Header onButtonClick={()=>{setForm({showForm: !form.showForm})}} formstate = {form.showForm} />
      { tasks.length > 0 ?<Tasks tasks ={tasks} onDelete={deleteTask} onToggle={toggleReminder}  /> 
      :"There are no tasks..."
      }
      { form.showForm?<Addtask onAdd ={addTask}/>:''}
    </div>
  );
}

export default App;
