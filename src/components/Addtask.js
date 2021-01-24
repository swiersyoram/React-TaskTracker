import React from 'react'
import { useState } from "react";
const Addtask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [day,setDay] = useState('');
    const [reminder, setReminder] = useState(false);
    const onSubmit = (e)=>{
        e.preventDefault();
        if (!text) {
            alert('please add a task description')
            return
        }
        setText('');
        setDay('')
        setReminder(false)
        onAdd({text,day,reminder});

    }
    return (
        <form className='addform' onSubmit={onSubmit}>
            <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task' value={text} onChange={(e)=>{setText(e.target.value)}}/>
            </div>
            <div className='form-control'>
            <label>Day & Time</label>
            <input type='text' placeholder='Provide day and time' value={day} onChange={(e)=>{setDay(e.target.value)}}/>
            </div>
            <div className='form-control form-control-check'>
            <label>Reminder</label>
            <input type='checkbox'  checked={reminder} value={reminder} onChange={(e)=>{setReminder(e.target.checked )}}/>
            </div>
            <input type='submit' value='Save task' className='btn btn-block btn-submit' />
        </form>
    )
}

export default Addtask
