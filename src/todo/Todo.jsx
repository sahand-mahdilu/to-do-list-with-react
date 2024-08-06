import { Icon } from "@iconify/react";


export default function Todo() {
  return (
    <div>
      <li className="todo item"></li>  

      <button className="check-btn"><Icon icon="icon-park:check-one" /></button>
      <button className="trash-btn"><Icon icon="flat-color-icons:empty-trash" /></button>
      
    </div>
  )
}
