import React from "react";
import Task from "../task";

const TaskList =({todos})=> {
    const elements = todos.map((item)=>
    {
        const {id, ...itemProps } = item
        return (
            <li key = {item.id }><Task label { ...itemProps}/></li>
        )
    })
    return  ( <ul><label className='todo-list'>
        {elements}
        </label>
    </ul>)
}
export default TaskList