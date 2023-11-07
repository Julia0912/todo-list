import React from "react";

const Task = ( {label, important =false})=>{
    const style = {
        color: important ? 'tomato': "black"
    }
    return <div className='view'>
        <input className="toggle" type="checkbox"/>
        <label>
            <span style={style}>{ label }</span>
            <span className="created">created 5 minutes ago</span>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
        </label>
    </div>
}
export default Task

