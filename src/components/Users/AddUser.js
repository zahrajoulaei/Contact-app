import Card from "../UI/Card";
import styles from './AddUser.module.css'
import Button from "../UI/Button";
import UsersList from "./UsersLists";
import { useState } from "react";

const AddUsers = () => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');


    const AddUserHandler = (event) => {
        if(enteredUsername.length.trim()==0 || enteredAge ==0){
            return;
        }
        if(+enteredAge<0) {
            return;
        }
        event.preventDefault();
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);

    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);

    }

    return (
        <Card className={styles.input}>
            <form onSubmit={AddUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                <label htmlFor="age">Age</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}
export default AddUsers;