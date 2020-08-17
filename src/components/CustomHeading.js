import React from 'react';

const CustomHeading = ({ text }) => {
	return (
		<p
			className='text-black'
			style={{
				fontSize: '1.3rem',
				fontWeight: 500,
				marginTop: '1rem',
				marginBottom: '1.5rem',
			}}
		>
			{text}
		</p>
	);
};

export default CustomHeading;
