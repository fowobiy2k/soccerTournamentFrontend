import React from 'react'
import Modal from 'react-modal';
import { useState, useEffect, useRef } from 'react'

const TestModal = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='main'>
            <div>
                <button onClick={() => { setModalOpen(!modalOpen) }}>Greeting</button>

                {modalOpen && (
                    <div className="modal">
                        <p>You are welcome.</p>
                    </div>
                )}
            </div>

            <div>
                <button onClick={ () => {setIsOpen(true)}}>Toggle Modal</button>
                <Modal isOpen={isOpen}>
                    <h2>My Modal</h2>
                    <p>This is a modal</p>
                    <button onClick={ () => {setIsOpen(false)}}>Close</button>
                </Modal>
            </div>

        </div>
    )
}

export default TestModal
