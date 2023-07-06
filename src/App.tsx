import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Search } from './components/Search'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.search}>
          <Search />
        </div>

        <div className={styles.todoList}>

        </div>
      </div>
    </div>
  )
}
