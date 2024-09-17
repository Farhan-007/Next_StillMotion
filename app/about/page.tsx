"use client"
import React, { useRef, useState } from 'react';

function About() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20 ">
            <ModalComponent />
        </div>


    )
}


const ModalComponent: React.FC = () => {
    const modalRef = useRef<HTMLDialogElement>(null); // Create a ref for the dialog element
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
            setIsModalOpen(false);
        }
    };

    return (
        <div>
            <button className="btn" onClick={openModal}>Open Modal</button>
            <dialog id="my_modal_2" ref={modalRef} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click outside to close</p>
                </div>
                <form method="dialog" className="modal-backdrop" onSubmit={(e) => {
                    e.preventDefault(); // Prevent form submission
                    closeModal();
                }}>
                    <button type="submit">Close</button>
                </form>
            </dialog>
        </div>
    );
}

export default About