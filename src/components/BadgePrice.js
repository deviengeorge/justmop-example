import React from 'react';
import { Badge } from 'reactstrap';

const BadgePrice = ({ text, active }) => {
	return (
		<Badge
			pill
			className={'py-2 px-3 badge-price ' + active}
			style={{ fontSize: '16px' }}
		>
			{text}
		</Badge>
	);
};

export default BadgePrice;
