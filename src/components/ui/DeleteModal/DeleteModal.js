import React, {useState} from 'react';

const DeleteModal = ({ openModal, setOpenModal, removeTask}) => {


    const [input, setInput] = useState('')

    const closeModal = () => {
        setOpenModal({isOpen:false,
            mode: null,
            data: null})
        setInput('')
    }
const onDelete = () => {
    removeTask(openModal.data._id);
    closeModal()
}

    return (
        <div>
            <h4 style={{cursor: 'not-allowed', width: 'auto', backgroundColor: 'red', color: 'white', borderRadius: '5px'}}>
                DELETE THIS TASK?</h4>

            <div>
               <strong>Task name:</strong>  <br/> <strong style={{color: 'red'}}> "{openModal.data?.name}"</strong>
            </div>

            <p style={{color: 'gray'}}>
                To confirm, type <br/> <strong> {openModal.data?.name}</strong> <br/> in the box below
            </p>

            <input type="text"
                   value={input}
                onChange={ (event) => setInput(event.target.value)}/>

            <div style={{margin: '5px'}}>
                <button
                    disabled={input !== openModal.data?.name}
                className="btn btn-outline-danger"
                onClick={onDelete}>Delete</button>

                <button className="btn btn-outline-primary m-1"
                onClick={closeModal}>Cancel</button>

            </div>
        </div>


    )
        ;
};


export default DeleteModal;