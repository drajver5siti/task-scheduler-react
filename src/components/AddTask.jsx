import { useState } from "react";
import { v4 } from 'uuid';


const AddTask = ({visible, addTask}) => {

    const [taskNameValue, setTaskNameValue] = useState('');
    const [taskDateValue, setTaskDateValue] = useState('');

    const submitForm = (e) => {
        e.preventDefault();

        const data={
            _id: v4(),
            name: taskNameValue,
            date: taskDateValue,
            reminder: false
        }
        addTask(data);
        setTaskNameValue('')
        setTaskDateValue('')
    }

    return (
        visible ? 
        <form onSubmit={submitForm} className='form-add-task'>
            <div className='form-piece'>
                <label htmlFor="task-name" className='add-task-label'>Task: </label>
                <input placeholder='Name of the task' type="text" name='task-name' value={taskNameValue} onChange={(e)=>setTaskNameValue(e.target.value)} className='add-task-input'/>
            </div>
            <div className='form-piece'>
                <label htmlFor="task-desc" className='add-task-label'>Day & time: </label>
                <input type="date" name='task-desc' className='add-task-input' value={taskDateValue} onChange={(e)=>setTaskDateValue(e.target.value)}/>
            </div>
            <button type='submit' className='add-task-btn' disabled={!taskNameValue || !taskDateValue}>SUBMIT</button>
        </form>
        : ''
    )
}

export default AddTask;