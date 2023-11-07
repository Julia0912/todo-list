import React from "react";
import TasksFilter from "../tasks-filter";


const Footer = ()=>{
    return (
        <div className='footer'>
            <span >1 items left</span>
            <TasksFilter/>
            <button className="clear-completed">Clear completed</button>
        </div>)
}
export default Footer