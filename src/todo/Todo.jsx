import { Icon } from "@iconify/react";


export default function Todo(props) {


    const removeClickHandler = (id) => {
        props.onRemove(id)
    }

    const editClickHandler = (id) => {
        props.onEdit(id)
    }

  return (
    <div className={`todo ${props.completed ? 'completed' : ''}`} style={{ display: 'flex' }}>
      <li className="todo item">{props.title}</li>  

      <button className="check-btn" onClick={() => editClickHandler(props.id)}><Icon icon="icon-park:check-one" /></button>
      <button className="trash-btn" onClick={() => removeClickHandler(props.id)}><Icon icon="flat-color-icons:empty-trash" /></button>
      
    </div>
  )
}
