import React, { useContext } from 'react';
import { GalleryContext } from '../../context/GalleryContext';

const Modal = () => {
    const { modal, setModal } = useContext(GalleryContext);

    return modal && (
        <div id='modal' onClick={() => setModal(false)}>
            <button onClick={() => setModal(false)}>x</button>
            <img src={require(`../../assets/images/${modal.url}`).default} alt={modal.description} height='auto' width='50%' />
        </div>
    )
}

export default Modal
