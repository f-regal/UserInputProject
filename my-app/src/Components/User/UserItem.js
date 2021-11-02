import styles from './UserItem.module.css';

const UserItem = (props) => {
    return (
    <div className={styles['list-item']}>
        <li><strong>{props.children}</strong></li>
    </div>)
}

export default UserItem;
