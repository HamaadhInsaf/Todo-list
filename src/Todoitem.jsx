export function Todoitem({ Completed, ID, Title, Toggletodo, Deletetodo }) {
    return (
        <li>
          <label>
            <input type="checkbox" checked={Completed} onChange={e => Toggletodo(ID, e.target.checked)} />
            {Title}
          </label>
          <button onClick={() => Deletetodo(ID)} className="btn btn_delete">Delete</button>
        </li>
      )
}