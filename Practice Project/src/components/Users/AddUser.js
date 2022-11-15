import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css';

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState('');

	const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUsername.length === 0 || enteredAge.length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values).',
			});
			return;
		}

		if (enteredAge < 1) {
			alert('young');
			return;
		}

		props.onAddUser(enteredUsername, enteredAge);
		setEnteredAge('');
		setEnteredUsername('');
	};

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	return (
		<Card cssClass={styles.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor='username'>Username</label>
				<input
					id='username'
					name='username'
					value={enteredUsername}
					onChange={usernameChangeHandler}
					type='text'
				/>
				<label htmlFor='age'>Age(Years)</label>
				<input id='age' name='age' type='number' value={enteredAge} onChange={ageChangeHandler} />
				<Button type='submit'>Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
