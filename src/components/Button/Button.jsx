import styles from './Button.module.css';
import { MdMessage } from 'react-icons/md';
const Button = () => {
    return (

        <button className={styles.primary_btn}>
            <MdMessage />Button
        </button>


    )
}

export default Button