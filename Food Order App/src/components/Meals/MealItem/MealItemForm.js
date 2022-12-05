import React from 'react';
import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = (props) => {
	return (
		<form className={styles.form}>
			<Input
				label='Amount'
				input={{
					id: 'amount_' + props.id,
					type: 'number',
					max: '5',
					min: '0',
					defaultValue: '0',
					step: '1',
				}}
			/>
			<button>Add Item</button>
		</form>
	);
};

export default MealItemForm;
