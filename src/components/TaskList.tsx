import { TbClipboardText } from 'react-icons/tb'
import { ITask } from '../App';
import { Task } from './Task';
import styles from './TaskList.module.css'

interface TasksProps {
  tasks: ITask[];
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function TaskList({ tasks, onComplete, onDelete }: TasksProps) {
  const tasksQty = tasks.length;
  const tasksCompletedQty = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.info}>
        <div className={styles.createdInfo}>
          <strong>Tarefas Criadas</strong>
          <span>{tasksQty}</span>
        </div>   
        <div className={styles.doneInfo}>
          <strong>Concluídas</strong>
          <span>{tasksCompletedQty} de {tasksQty}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasksQty <= 0 && (
          <section className={styles.taskListEmpty}>
            <TbClipboardText size={50}/>
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
        
        {tasks.map((task) => (
          <Task 
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  )
}