import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function UpdateModal({statuses, priorities, task, editTask}) {
    const [modal, setModal] = useState(false);
    const [updatedTask, setUpdatedTask] = useState(
        {
            name: task.name,
            description: task.description,
            status: task.status,
            priority: task.priority
        })

    const toggle = () => setModal(!modal);
    const style = {marginRight: '10px', marginBottom: '10px'}

    const onUpdate = () => {
        editTask(task._id, updatedTask)
        toggle()
    }

    return (
        <div>
            <Button color="primary" onClick={toggle}>
                Update
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader style={{backgroundColor: 'orange', color: 'black'}}
                             toggle={toggle}>Update task</ModalHeader>
                <ModalBody>
                    <input style={style}
                           type="text"
                           value={updatedTask.name}
                           onChange={e =>
                               setUpdatedTask({...updatedTask, name: e.target.value})}
                    />
                    <input style={style}
                           type="text"
                           value={updatedTask.description}
                           onChange={e =>
                               setUpdatedTask({...updatedTask, description: e.target.value})}
                    />

                    <select
                        style={style}
                        value={updatedTask.status}
                        onChange={e => setUpdatedTask(
                            {...updatedTask, status: e.target.value})}
                    >
                        {statuses.map(status =>
                            <option key={status._id}
                                    value={status.title}>
                                {status.title}
                            </option>)
                        }
                    </select>

                    <select
                        value={updatedTask.priority}
                        onChange={e => setUpdatedTask(
                            {...updatedTask, priority: e.target.value})}
                    >
                        {priorities.map(priority =>
                            <option
                                style={{color: 'red'}}
                                key={priority}
                                value={priority}>
                                {priority}
                            </option>
                        )}
                    </select>
                </ModalBody>
                <ModalFooter style={{backgroundColor: '#e3dcd2', color: 'black'}}>
                    <Button color="primary" onClick={onUpdate}>
                        Update
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
        ;
}

export default UpdateModal;