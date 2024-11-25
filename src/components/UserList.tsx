import styles from './UserList.module.css';
import UserDisplay from './UserDisplay';
import { Link } from '@tanstack/react-router';

export default ({ users }: { users: any}) => (
    <div className={styles.userListContainer}>
            <h2>User List</h2>
            <div className={styles.userGrid}>
                {users.map((user: any) => (
                    <Link to={`/users/${user.userId}`} className={styles.userNavLink}>
                        <UserDisplay user={user}/>
                    </Link>
                ))}
            </div>
        </div>
)