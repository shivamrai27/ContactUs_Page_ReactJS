import styles from './Button.module.css'
import { MdMessage } from 'react-icons/md';
function Button() {
    return (
        <Button className={styles.primary_btn}>
            <MdMessage />Button
        </Button>
    )
}

export default Button