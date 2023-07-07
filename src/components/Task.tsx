import { BsCircle, BsFillCheckCircleFill, BsTrash } from "react-icons/bs";
import style from './Task.module.css'

export function Task() {
  return (
    <div className={style.task}>    
      <button className={style.unchecked}>
        <BsCircle size={20} />
      </button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quaerat tempore earum numquam asperiores nobis omnis delectus.
      </p>
      <button className={style.delete}>
        <BsTrash size={20} />
      </button> 
    </div>   
  )
}