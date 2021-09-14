import Card from "../UI/Card";
import styles from './AddUser.module.css'
import Button from "../UI/Button";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState();


    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName= nameInputRef.current.value;
        const ageEntered= ageInputRef.current.value
        if (enteredName.trim().length === 0 || ageEntered.trim().length === 0) {
            setError({
                title: 'invalid input',
                message: 'please enter valid name and age '
            });
            return;
        }
        if (+ageEntered < 1) {
            setError({
                title: 'invalid age',
                message: 'please enter valid age '
            });
            return;
        }
        props.onAddUser(enteredName, ageEntered);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';

    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal message={error.title} title={error.message} onConfirm={errorHandler} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={nameInputRef}/>
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" ref={ageInputRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
}
export default AddUser;