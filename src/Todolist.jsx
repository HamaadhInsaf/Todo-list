import { Todoitem } from "./Todoitem"

export function Todolist({ Todos, Toggletodo, Deletetodo }) {
    return (
        <ul className="List">
        {Todos.length === 0 && "No Todos"}
        {Todos.map(Todo => {
            return (
                <Todoitem {...Todo} Key={Todo.ID} Toggletodo={Toggletodo} Deletetodo={Deletetodo} />
            )
        })}
      </ul>
    )
}