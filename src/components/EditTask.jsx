import { useState } from "react";

const EditTask = ({task, applyChanges}) => {

    const [taskNameValue, setTaskNameValue] = useState(task.name);
    const [taskDateValue, setTaskDateValue] = useState(task.date);
    const [taskReminder, setTaskReminder] = useState(task.reminder);


    const editTask = (e) => {
        e.preventDefault()
        const data = {
            _id: task._id,
            name: taskNameValue,
            date: taskDateValue,
            reminder: taskReminder
        }
        setTaskNameValue('')
        setTaskDateValue('')
        setTaskReminder('')
        applyChanges(data);

    }

    return (
        <>
            <form onSubmit={editTask} className='form-add-task'>
                <div className="form-piece">
                    <label htmlFor="task-id" className='add-task-label'>ID:</label>
                    <input type="text" value={task._id} name='task-id' disabled={true} className='add-task-input'/>
                </div>
                <div className="form-piece">
                    <label htmlFor="task-name" className='add-task-label'>Name:</label>
                    <input type="text" value={taskNameValue} name='task-name' className='add-task-input' onChange={(e)=>{setTaskNameValue(e.target.value)}}/>
                </div>
                <div className="form-piece">
                    <label htmlFor="task-date" className='add-task-label'>Date:</label>
                    <input type="date" value={taskDateValue} name='task-date' className='add-task-input'onChange={(e)=>{setTaskDateValue(e.target.value)}}/>
                </div>
                <div className="form-piece">
                    <label htmlFor="task-reminder" className='add-task-label'>Reminder:</label>
                    <input type="checkbox" checked={taskReminder} name='task-reminder' className='add-task-input ' style={{marginTop: '-1.3rem'}} onChange={()=>{setTaskReminder(!taskReminder)}}/>
                </div>
                <button type='submit' className='add-task-btn' disabled={!taskNameValue || !taskDateValue}>EDIT</button>

            </form>
        </>
    )
}

export default EditTask;