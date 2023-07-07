import { BsPlusCircle } from "react-icons/bs";
import styles from './Search.module.css'

export function Search() {
  return (
    <form className={styles.todoadd}>
      <textarea
        name="todo"
        placeholder="Adicione uma nova tarefa"
        required
      />
      <button type='submit'>
        Criar
        <BsPlusCircle />
      </button>
    </form>
  )
}