import styles from './UserList.module.css';

export default ({ user }: { user: any}) => (
    <div key={user.userId} className={styles.userCard}>
        <img
            src={user.avatar}
            alt={user.username}
            className={styles.avatar}
        />
        <div>
            <strong className={styles.userHeading}>{user.username}</strong>
            <p className={styles.userText}>Email: {user.email}</p>
            <p className={styles.userText}>Birthdate: {user.birthdate}</p>
            <p className={styles.userText}>Registered At: {user.registeredAt}</p>
        </div>
    </div>
)