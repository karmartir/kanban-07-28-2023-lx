import React from 'react';
import Loader from "../utils/Loader";
import StatusColumns from "./StatusColumns";

const Kanban = ({
                    statuses,
                    tasks,
                    isStatusesLoader,
                    isTasksLoader,
                    statusesError,
                    tasksError,
                    setOpenModal,
                    changePriority,
                    changeStatus,
                    priorities,
                    editTask
                }) => {
    if (isStatusesLoader || isTasksLoader) return <Loader/>
    if (statusesError) return <h2>{statusesError}</h2>
    if (tasksError) return <h2>{tasksError}</h2>

    return (
        <div>


            <div className="container">
                <div className="row align-items-start">
                    {statuses.map((status) =>
                        <StatusColumns
                            key={status._id}
                            status={status}
                            tasks={tasks}
                            setOpenModal={setOpenModal}
                            changePriority={changePriority}
                            changeStatus={changeStatus}
                            statuses={statuses}
                            priorities={priorities}
                            editTask={editTask}

                        />
                    )}
                </div>
            </div>

        </div>
    );
};

export default Kanban;