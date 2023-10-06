import styles from './Button.module.css';
import { MdMessage } from 'react-icons/md';
const Button = () => {
    return (
        <Button className={styles.primary_btn}>
            <MdMessage />Buttonm
        </Button>
    )
}

export default Button