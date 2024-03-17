"use client";
import React from 'react';
import './Modal.css';
import PropTypes from 'prop-types';

const Modal = ({title, message, isOpen,closeModal}) => {
	return (
		<div className={isOpen ? "modal is-open" : "modal"}>
			<div className="modal-head">
				<h2>{title}</h2>
			</div>
 			<div className="modal-body">
				{message}
			</div>
			<div className="modal-footer">
                <button onClick={closeModal}>Cerrar</button>
            </div>
 		</div>
	);
};

Modal.propTypes = {};

export default Modal;