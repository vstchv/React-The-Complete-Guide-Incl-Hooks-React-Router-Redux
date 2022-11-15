import React from 'react';

const Header = ({ children, mode }) => {
	return (
		<div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'gray',
				}}>
				<p>Home</p> <p>About</p> {mode !== 'public' && <p>Logout</p>}
			</div>
			<main style={{ padding: 10 }}>{children}</main>
		</div>
	);
};

export default Header;
