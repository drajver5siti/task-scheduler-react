import {FaTrashAlt, FaEdit} from 'react-icons/fa'

import { useState } from "react";

const Task = (({task, onDelete, onEdit}) => {
        const [taskID] = useState(task._id);
        const [taskTitle] = useState(task.name);
        const [taskReminder, setTaskReminder] = useState(task.reminder);
        const [taskDate] = useState(task.date.split('T')[0]);

         
        const setReminder = (e) => {
            e.preventDefault()
            setTaskReminder(!taskReminder)
        }
// 'task-item task-item-reminder'
    return (
        <div className="task-item-wrapper">
            <article className = {taskReminder ? 'task-item task-item-reminder' : 'task-item'} onDoubleClick= {setReminder}>
                <p className='task-title'>{taskTitle}</p>
                <div className='task-button-inside-group'>
                    <FaEdit className='task-button-inside' onClick={()=>{onEdit({_id: taskID, name: taskTitle, date:taskDate, reminder: taskReminder})}}/>
                    <FaTrashAlt className='task-button-inside' onClick={()=>{onDelete({_id: taskID, name: taskTitle, date:taskDate, reminder: taskReminder})}}/>
                </div>
            <p className='task-date'>{taskDate}</p>
            </article>
        </div>
    )
})

export default Task;