import React from 'react';
import Task from "./Task";

const StatusColumns = ({status, tasks, setOpenModal, changePriority, changeStatus, statuses}) => {
    return (


            <div className="col"  >
                <h3>{status.title}</h3>

                {tasks.filter(task => task.status === status.title).map(task =>
                    <Task key={task._id} task={task} status={status}  setOpenModal={setOpenModal}
                          changePriority={changePriority} changeStatus={changeStatus} statuses={statuses}/>
                )}

            </div>


    );
};

export default StatusColumns;