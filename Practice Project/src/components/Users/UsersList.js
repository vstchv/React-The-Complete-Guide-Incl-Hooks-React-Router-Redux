import React from 'react';
import Card from '../UI/Card';
import styles from './UsersList.module.css';

const UsersList = (props) => {
	return (
		<Card className={styles.users}>
			<ul>
				{props.userData.map((user) => (
					<li key={user.id}>
						{user.name} {user.age} Years Old
					</li>
				))}
			</ul>
		</Card>
	);
};

export default UsersList;

//Why here @ user is  () but not {}
