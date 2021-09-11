import styles from './UsersLists.module.css';
import Card from '../UI/Card';
const UsersList = (props) => {
    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map((user) => (
                    <li>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
};
export default UsersList;