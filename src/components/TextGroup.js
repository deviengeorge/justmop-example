import React from 'react';
import { CardTitle, CardText } from 'reactstrap';

const TextGroup = ({ text1, text2, blueColor }) => {
	return (
		<div className='text-group'>
			<CardTitle>{text1}</CardTitle>
			<CardText
				style={{
					color: blueColor ? '#54caff' : '',
					fontWeight: blueColor ? 700 : 400,
				}}
			>
				{text2}
			</CardText>
		</div>
	);
};

export default TextGroup;
