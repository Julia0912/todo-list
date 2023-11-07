import React from "react";

const TasksFilter =()=>{
    return(
        <div > <ul className='filters'  >
            <li><button className='selected'>All</button></li>
            <li><button>Active</button></li>
            <li><button>Completed</button></li>
        </ul>

        </div>
    )
}
export default TasksFilter