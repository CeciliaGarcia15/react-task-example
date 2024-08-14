import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'


function TaskCard({task}) {
const {deleteTask} = useContext(TaskContext)
return (
        <div className='p-4 rounded-md bg-slate-800 text-white'>
          <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
          <p className='text-gray-500 text-sm'>{task.description}</p>
          <button className='hover:bg-red-400 bg-red-500 px-2 py-1 rounded-md mt-4' onClick={()=>deleteTask(task.id)}>Eliminar Tarea</button>
        </div>
  )
}

export default TaskCard
