import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Search } from './components/Search'
import { TaskList } from './components/TaskList'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.search}>
          <Search />
        </div>

        <TaskList />
      </div>
    </div>
  )
}
