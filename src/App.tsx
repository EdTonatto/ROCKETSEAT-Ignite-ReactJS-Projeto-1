import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Search } from './components/Search'
import { TaskList } from './components/TaskList'
import { useEffect, useState } from 'react'

const LOCAL_STORAGE_KEY = "todo:tasks";

export interface ITask {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function loadSavedTasks() {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function setTasksAndLocalSave(newTasks: ITask[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function handleAddTask(content: string){
    setTasksAndLocalSave(
      [
        ...tasks,
        {
          id: crypto.randomUUID(),
          content: content,
          isCompleted: false,
        }
      ]
    );
  }

  function handleDeleteTaskById(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasksAndLocalSave(newTasks);
  }

  function handleTaskComplete(id: string) {
    const newTasks = tasks.map((task) => {
      if(task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task;
    }); 
    setTasksAndLocalSave(newTasks);
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.search}>
          <Search onAddTask={handleAddTask}/>
        </div>

        <TaskList 
          tasks={tasks}
          onDelete={handleDeleteTaskById}
          onComplete={handleTaskComplete}
        />
      </div>
    </div>
  )
}
