import { BsCircle, BsFillCheckCircleFill, BsTrash } from "react-icons/bs";
import { ITask } from "../App";
import styles from './Task.module.css'

interface TaskProps {
  task: ITask;
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function Task({ task, onComplete, onDelete }: TaskProps) {
  return (
    <div className={styles.task}>    
      <button className={task.isCompleted ? styles.checked : styles.unchecked} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill size={20} /> : <BsCircle size={20} />}
      </button>
      <p className={task.isCompleted ? styles.completed : ""}>
        {task.content}
      </p>
      <button className={styles.delete} onClick={() => onDelete(task.id)}>
        <BsTrash size={20} />
      </button> 
    </div>   
  )
}