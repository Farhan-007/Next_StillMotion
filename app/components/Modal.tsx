import Image from "next/image";
import { useEffect, useRef, ReactNode } from "react";

interface ModalProps {
    openModal: boolean;
    closeModal: () => void;
    children: ReactNode;
}

function Modal({ openModal, closeModal, children }: ModalProps) {
    const ref = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (openModal) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [openModal]);

    return (
        <dialog
            ref={ref}
            onCancel={closeModal}
            className="rounded-2xl"
        >
            {children}
            <button onClick={closeModal} className="absolute top-[10px] right-[10px]">
                <span className="w-2 h-2">
                    {/* <img className="w-10 h-10" src="/close-circle-svgrepo-com.svg" alt="" /> */}
                    <Image
                        src="/close-circle-svgrepo-com.svg"
                        alt="close"
                        width={"5"}
                        height={"5"}    
                    />
                </span>
            </button>
        </dialog>
    );
}

export default Modal;
