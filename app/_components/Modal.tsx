import Image from "next/image";
import { useEffect, useRef, ReactNode } from "react";

interface ModalProps {
    openModal: boolean;
    closeModal: () => void;
    modalImg: string;
}

function Modal({ openModal, closeModal, modalImg }: ModalProps) {
    const ref = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (openModal) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [openModal]);

    return (
        // <dialog
        //     ref={ref}
        //     onCancel={closeModal}
        //     className="rounded-2xl w-full h-full"
        // >
        //     <Image
        //         src={modalImg}
        //         alt={`image`}
        //         fill={true}
        //         sizes="(min-width: 1420px) 272px, (min-width: 1080px) calc(5.63vw + 193px), (min-width: 800px) calc(33.08vw - 14px), (min-width: 540px) calc(50vw - 16px), calc(100vw - 16px)"
        //         className=" object-cover"
        //     />
        //     <button onClick={closeModal} className="absolute top-[10px] right-[10px]">
        //         <span className="w-2 h-2">
        //             <img className="w-10 h-10" src="/close-circle-svgrepo-com.svg" alt="" />
        //             <Image
        //                 src="/close-circle-svgrepo-com.svg"
        //                 alt="close"
        //                 width={"5"}
        //                 height={"5"}
        //             />
        //             close
        //         </span>
        //     </button>
        // </dialog>
        <>

            <dialog open={openModal} className="modal">
                <div className="modal-box p-0 ">
                    {/* Display the image passed via props */}
                    <Image
                        src={modalImg}
                        alt="Modal Content"
                        fill={true}
                        sizes="(min-width: 1420px) 272px, (min-width: 1080px) calc(5.63vw + 193px), (min-width: 800px) calc(33.08vw - 14px), (min-width: 540px) calc(50vw - 16px), calc(100vw - 16px)"
                        priority={true}
                        className="modal-image " />
                </div>
                <form method="dialog" className="modal-backdrop bg-[#0000004d]" onSubmit={(e) => {
                    e.preventDefault(); // Prevent default form submission
                    closeModal();
                }}>
                    <button type="submit">Close</button>
                </form>
            </dialog>
        </>
    );
}

export default Modal;
