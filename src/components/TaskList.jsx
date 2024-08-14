import React, {useContext}  from 'react'
import TaskCard from './TaskCard.jsx'
import { TaskContext } from '../context/TaskContext.jsx'


export default function TaskList() {
    const {tasks} = useContext(TaskContext)
    if(tasks.length === 0){
        return <h1 className='text-4xl font-bold text-center text-white'>No hay tareas aun</h1>
    }
  return (
    <div className='grid grid-cols-4 gap-2'>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  )
}
