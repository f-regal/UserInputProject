import styles from './Modal.module.css';


const Modal = (props) => {

    
    return (
        <div className={styles.card}>
            <div className={styles.header}>
            <h1>{props.error.title}</h1>
            </div>
            <div className={styles.container}>
                <p>{props.error.message}</p>
            </div>
            <button className={styles.button} onClick={props.onErrorOkay}>Okay</button>
        </div>
    );
}

export default Modal;

