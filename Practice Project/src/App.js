import { useState } from 'react';
import AddUser from './components/Users/AddUser.js';
import UsersList from './components/Users/UsersList.js';

const App = () => {
	const [usersList, setUsersList] = useState([]);

	const onAddUser = (username, age) => {
		setUsersList((prevUsersList) => {
			return [...prevUsersList, { name: username, age: age, id: Math.random.toString() }];
		});
	};

	return (
		<div>
			<AddUser onAddUser={onAddUser} />
			<UsersList userData={usersList} />
		</div>
	);
};

export default App;
