import React from 'react';
import UpdateModal from "./UpdateModal";

const Task = ({task, setOpenModal, changePriority, changeStatus, statuses, priorities, editTask}) => {

    const isPriorityLessThanOne = task.priority <= 1;
    const isPriorityGreaterThanTen = task.priority >= 10;

    return (
        <div className="card mb-3">
            <div className="card-header" style={{display: "flex", alignItems: 'center', height: '45px'}}>
                <h6> Priority: <strong style={{color: 'red', fontSize: '20px'}}>{task.priority}</strong> </h6>
                <button type="button" className="btn btn-outline-primary btn-sm ms-auto"
                        onClick={() => changePriority(task._id, {priority: +task.priority - 1})}
                        disabled={isPriorityLessThanOne}
                        style={isPriorityLessThanOne ? { visibility: 'hidden'} : {}}
                >
                    ↑
                </button>
                <button type="button" className="btn btn-outline-primary btn-sm m-1"
                        onClick={() => changePriority(task._id, {priority: +task.priority + 1})}
                        disabled={isPriorityGreaterThanTen}
                        style={isPriorityGreaterThanTen ? { visibility: 'hidden'} : {}}
                >
                    ↓
                </button>

            </div>
            <div className="card-body">
                <h3 className="card-title">{task.name}</h3>
                <p className="card-text">{task.description}</p>
                <div style={{margin: "4px"}}>
                    <button type="button" className="btn btn-outline-primary btn-sm m-1"
                            onClick={() => changeStatus(task._id, task.status, -1)}
                            disabled={statuses[0].title === task.status}
                    >←
                    </button>

                    <button type="button" className="btn btn-outline-primary btn-sm ms-0"
                            onClick={() => changeStatus(task._id, task.status, 1)}
                            disabled={statuses[statuses.length - 1].title === task.status}
                    >→
                    </button>
                        <hr/>

                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <UpdateModal
                        statuses={statuses}
                        priorities={priorities}
                        task={task}
                        editTask={editTask}
                    />
                    <button className="btn btn-outline-danger m-1"
                            onClick={() => setOpenModal({
                                isOpen: true,
                                mode: "delete",
                                data: task
                            })}
                    >Delete
                    </button>
                </div>
            </div>
        </div>


    );
};

export default Task;