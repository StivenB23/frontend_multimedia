import React, { useState } from 'react';
import './ModalTest.css';

const ModalTest = ({ isOpen, closeModal }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true); 
        setTimeout(() => {
            setIsClosing(false); 
            closeModal(); 
        }, 500); 
    };

    if (!isOpen && !isClosing) return null;

    return (
        <div className={`modal-background ${isClosing ? 'modalAnimationOut' : 'modalAnimation'}`}>
            <div className='modaltest'>
                <h1>ESTO ES UNA MODAL DE PRUEBA</h1>
                <button onClick={handleClose}>Cerrar ventana modal</button>
            </div>
        </div>
    );
};

export default ModalTest;
