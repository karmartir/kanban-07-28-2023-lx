import React, {useState} from 'react';
import MyButton from "./ui/Button/MyButton";

const CreateModal = ({priorities, statuses, createTask, setOpenModal}) => {
    const initialTask = {
        name: "",
        description: "",
        priority: priorities[0],
        status: statuses[0]?.title
    }
    const [newTask, setNewTask] = useState(initialTask);

    const onCreate = () => {
        createTask(newTask)
        setOpenModal({
                isOpen: false,
                mode: null,
                data: null
            }
        )
        setNewTask(initialTask)
    }

    const onCancel = () => {
        setOpenModal({
            isOpen: false,
            mode: null,
            data: null
        })
        setNewTask(initialTask)
    }


    return (
        <div>
            <h3>Create new Task</h3>

            <div  className="form-floating mb-3">
                <input value={newTask.name}
                       onChange={(e) => setNewTask({...newTask, name: e.target.value})}
                       type="text" className="form-control"/>
                <label htmlFor="floatingInputGroup">Task name</label>
            </div>

            <div className="form-floating mb-3">
                <input value={newTask.description}
                       onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                       type="text" className="form-control"/>
                <label htmlFor="floatingInputGroup">Description</label>
            </div>

            <div className="form-floating mb-3">
                <select
                    value={newTask.priority}
                    onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
                    className="form-select">
                    {priorities.map(el => <option key={el} value={el}>{el}</option>)}
                </select>
                <label htmlFor="floatingInputGroup">Priority</label>


            </div>
            <div className="form-floating mb-3">
                <select
                    value={newTask.status}
                    onChange={(e) => setNewTask({...newTask, status: e.target.value})}
                    className="form-select">
                    {statuses.map(el => <option key={el._id} value={el.title}>{el.title}</option>)}
                </select>
                <label htmlFor="floatingInputGroup">Status</label>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <MyButton onClick={onCreate}>Create</MyButton>
                <MyButton onClick={onCancel}>Cancel</MyButton>
            </div>

        </div>
    );
};

export default CreateModal;