import React from 'react';
import classes from './MyModal.module.css'

const MyModal = ({openModal, setOpenModal, children}) => {
    return (
        <div className={openModal.isOpen ? classes.modal + " " + classes.modal_active : classes.modal}
        onClick={() => setOpenModal({
            isOpen: false,
            mode: null,
            data: null
        })}
        >
            <div className={openModal ? classes.content + " " + classes.content_active : classes.content}
            onClick={(e)=>e.stopPropagation()}
            >
                {openModal.mode === "create" ? children[0] : children[1]}
            </div>
        </div>
    );
};

export default MyModal;