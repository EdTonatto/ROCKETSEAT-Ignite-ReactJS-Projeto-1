import { TbClipboardText } from 'react-icons/tb'
import { Task } from './Task'
import styles from './TaskList.module.css'

export function TaskList() {
  return (
    <section className={styles.tasks}>
      <header className={styles.info}>
        <div className={styles.createdInfo}>
          <strong>Tarefas Criadas</strong>
          <span>0</span>
        </div>   
        <div className={styles.doneInfo}>
          <strong>Concluídas</strong>
          <span>0</span>
        </div>
      </header>

      <div className={styles.list}>
        <section className={styles.taskListEmpty}>
          <TbClipboardText size={50}/>
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </section>
      </div>
    </section>
  )
}