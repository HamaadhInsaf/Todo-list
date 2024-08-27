import { useState } from "react"

export function Newtodo(Props) {
    Props.onSubmit
    const [Newitem, Setnewitem] = useState("")
    function Submit(e) {
        e.preventDefault()
        // Settodos(Currenttodos => {
        //     return [
        //     ...Currenttodos, {ID:crypto.randomUUID(), Title:Newitem, Completed:false}
        //     ]
        // })
        if (Newitem === "") return
        Props.onSubmit(Newitem)
        Setnewitem("")
    }
    return (
        <form onSubmit={Submit} className="New_item">
        <div className="Form_row">
          <label htmlFor="Item">New Item</label>
          <input value={Newitem} onChange={e => Setnewitem(e.target.value)} type="text" id="Item" />
        </div>
        <button className="btn">Add</button>
      </form>
    )
}