import { ChangeEvent, FormEvent, useState } from 'react'
import { BsPlusCircle } from "react-icons/bs";
import styles from './InsertBar.module.css'

interface HeaderProps {
  onAddTask: (taskTitle: string) => void;
}

export function InsertBar({ onAddTask }: HeaderProps) {
  const [content, setContent] = useState("");

  function onChangeContent(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onAddTask(content);
    setContent("");
  }

  return (
    <form className={styles.todoadd} onSubmit={handleSubmit}>
      <textarea
        name="todo"
        placeholder="Adicione uma nova tarefa"
        onChange={onChangeContent}
        required
      />
      <button type='submit'>
        Criar
        <BsPlusCircle />
      </button>
    </form>
  )
}