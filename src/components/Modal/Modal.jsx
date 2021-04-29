import styles from './Modal.module.css'
import { Component } from 'react'
import { createPortal } from 'react-dom'

const MyModal = document.getElementById('modal-root')

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.onCloseModal)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onCloseModal)
    }

    onCloseModal = (e) => { 
        if (e.key === 'Escape') {
            this.props.closeModal()
        }
    }

    render() {
        const { children, closeModal } = this.props
        return createPortal(
            <div className={styles.backdrop} onClick={closeModal}>
                <div className={styles.modalContent}>{children}</div>
            </div>, MyModal)
    }
};

export default Modal;