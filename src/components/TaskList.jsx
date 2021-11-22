import { useState } from 'react';

import Task from '../components/Task';
import AddTask from './AddTask';
import EditTask from './EditTask'

const TaskList = () => {
    const [taskFormVisibility, toggleTaskFormVisibility] = useState(false);
    const [editingTask, setEditingTask] = useState(false)
    const [taskToEdit, setTaskToEdit] = useState({});
    const [tasksFromAPI, setTasks] = useState([]);

    const addTask = (data) => {
        setTasks([...tasksFromAPI, data])
    }

    const deleteTask = (taskToDelete)=>{
        setTasks(tasksFromAPI.filter(task => task._id !== taskToDelete._id));
    }   

    const toggleAddTaskForm = (e)=>{
        e.preventDefault()
        toggleTaskFormVisibility(!taskFormVisibility);
    }
    const editTask = (task)=>{
        setTaskToEdit(task);
        setEditingTask(!editingTask)
    } 

    const applyChanges = (taskToEdit) => {
        const data = []
        for(let i=0;i<tasksFromAPI.length; i++)
        {
            if(taskToEdit._id === tasksFromAPI[i]._id)
                data.push(taskToEdit)
            else    
                data.push(tasksFromAPI[i]);
        }
        setEditingTask(false);
        setTasks([...data]);
    }


    return (
        <div className='task-list-container'>
            <div className="task-list-header">
                <p className = 'task-list-title'>Tasks</p>
                {editingTask ? '' :  
                    <button className={!taskFormVisibility ? 'open-task-form-btn button-add-task' : 'open-task-form-btn button-close-task'} type='button' onClick={toggleAddTaskForm}>{taskFormVisibility ? 'Close':'Add'}</button> 
                }
            </div>
            <AddTask visible={taskFormVisibility && !editingTask} addTask={addTask}/>
            {
                editingTask ? <EditTask task={taskToEdit} applyChanges = {applyChanges}/> :
                    (
                        <section className='task-list'>
                            {tasksFromAPI.length === 0 ? <p className='no-tasks'>No tasks to display</p> :
                                tasksFromAPI.map((task, index)=>{
                                    return <Task task={task} key={task._id} onEdit={editTask} onDelete={deleteTask} />
                                })
                            }
                        </section>
                    )
            }
        </div>  
    )
}   

export default TaskList;