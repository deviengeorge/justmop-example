import React from 'react';
import { Card, CardTitle, CardBody, CardSubtitle } from 'reactstrap';
import { CSSTransition } from 'react-transition-group';

const MobilePriceList = ({ open }) => {
	return (
		<Card
			className='w-100 card-price'
			style={{
				display: open ? 'block' : 'none',
				top: 0,
				bottom: 0,
				zIndex: 999,
			}}
		>
			<CardBody>
				<TextGroup text1='CITY' text2='DUBAI' />
			</CardBody>
			<CardBody>
				<CardSubtitle
					style={{
						flexBasis: '100%',
						marginBottom: '1rem',
					}}
				>
					SERVICE DETAILS
				</CardSubtitle>
				<TextGroup text1='Home Type' text2='Villa' />
				<TextGroup
					text1='Bedrooms for villa'
					text2='1 BR (AED 799)'
				/>
			</CardBody>
			<CardBody>
				<CardTitle>DATE & TIME</CardTitle>
			</CardBody>
			<CardBody>
				<CardTitle>ADDRESS</CardTitle>
			</CardBody>
			<CardBody>
				<CardSubtitle
					style={{
						flexBasis: '100%',
						marginBottom: '1rem',
					}}
				>
					PRICE DETAILS
				</CardSubtitle>
				<TextGroup text1='Price' text2='AED 760.95' />
				<TextGroup text1='VAT' text2='AED 38.05' />
				<TextGroup text1='Total' text2='AED 799.00' blueColor />
			</CardBody>
		</Card>
	);
};

export default MobilePriceList;
