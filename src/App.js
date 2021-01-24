import './App.css';
import Header  from "./components/Header";
import { useEffect, useState } from "react";
import Tasks from './components/Tasks';
import Addtask from './components/Addtask'
import  React, { Component }  from "react";
function App() {
  
  const [tasks, setTasks] = useState(
    [
        {
            id:1,
            text:"Docters appointment",
            day:"June 3th at 5:00pm",
            reminder:true,
        }, 
        {
            id:2,
            text:"Meeting school",
            day:"September 15th at 2:00pm",
            reminder: true,
        },
         {
            id:3,
            text:"Carwash reservation",
            day:"July 24th at 3:00pm",
            reminder: false,
        },
    
    
    ] 
)
const [form,setForm] = useState({
  showForm: false
})

//add task 
const addTask =  (input)=>{
  const id = tasks.length===0?0:tasks[tasks.length-1].id+1;
  setTasks([...tasks,{id,...input}])
}
useEffect(()=>{
  console.log(tasks)
})
 

//delete task
const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id !== id))
  
}

//toggle reminder
const toggleReminder=(id)=>{
  setTasks(tasks.map((task)=>task.id===id?
  {...task, reminder:!task.reminder}:task))
 
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
