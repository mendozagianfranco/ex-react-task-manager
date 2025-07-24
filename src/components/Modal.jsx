import { createPortal } from 'react-dom';

export default function Modal({
    title,
    content,
    show = false,
    onClose,
    onConfirm,
    confirmText = 'Conferma'
}) {
    return show && createPortal(
        <div className='modal-container'>
            <div className='modal'>
                <h2>{title}</h2>
                <p>{content}</p>
                <div>
                    <button onClick={onClose}>Annulla</button>
                    <button onClick={onConfirm}>{confirmText}</button>
                </div>
            </div>
        </div>,
        document.body);
}