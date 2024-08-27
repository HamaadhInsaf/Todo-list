import { useEffect, useState } from "react"
import { Newtodo } from "./Newtodo"
import { Todolist } from "./Todolist"
import "./style.css"

export default function App() {
  const [Todos, Settodos] = useState(() => {
    const Localvalue = localStorage.getItem("ITEMS")
    if (Localvalue == null) return []
    return JSON.parse(Localvalue)
  })
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(Todos))
  }, [Todos])
  function Addtodo(Title) {
    Settodos(Currenttodos => {
      return [
      ...Currenttodos, {ID:crypto.randomUUID(), Title, Completed:false},
      ]
  })
  }
  function Toggletodo(ID, Completed) {
    Settodos(Currenttodos => {
      return Currenttodos.map(Todo => {
        if (Todo.ID === ID) {
          return {
            ...Todo, Completed
          }
        }
        return Todo
      })
    })
  }
  function Deletetodo(ID) {
    Settodos(Currenttodos => {
      return Currenttodos.filter(Todo => Todo.ID !== ID)
    })
  }
  return (
    <>
      <Newtodo onSubmit={Addtodo} />
      <h1 className="Header">Todo List</h1>
      <Todolist Todos={Todos} Toggletodo={Toggletodo} Deletetodo={Deletetodo} />     
    </>
  )
}