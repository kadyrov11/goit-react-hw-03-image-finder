import styles from './Button.module.css'

const Button = ({ title, onClick }) => (<button onClick={onClick} className={styles.Button}>{title}</button>);

export default Button;