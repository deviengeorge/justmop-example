import React, { useState } from 'react';
import './MobileFooter.css';
import {
	Container,
	Row,
	Button,
	Card,
	CardTitle,
	CardBody,
	CardSubtitle,
	CardText,
} from 'reactstrap';
import TextGroup from './TextGroup';
import { CSSTransition } from 'react-transition-group';

const MobileFooter = () => {
	const [open, setOpen] = useState(false);

	return (
		<footer className='fixed-bottom'>
			<Container>
				<Row
					className='py-3 px-3 justify-content-between'
					style={{ borderBottom: '1px solid #16161640' }}
				>
					<div className='group' onClick={() => setOpen(!open)}>
						<p className='text-dark font-weight-light first'>TOTAL</p>
						<p className='text-dark font-weight-bold'>
							AED 799.00
							<img
								src='https://justcdn.s3.eu-central-1.amazonaws.com/prod/assets/static/top-arrow.svg'
								alt='down triangle'
								width='25'
							/>
						</p>
					</div>
					<Button
						color='warning'
						className='px-5 py-2 text-light font-weight-bold'
						style={{ borderRadius: '2.5rem' }}
					>
						NEXT
					</Button>
				</Row>

				<CSSTransition
					in={open}
					timeout={300}
					classNames='slide'
					unmountOnExit
					onEnter={() => setOpen(true)}
					onExited={() => setOpen(false)}
				>
					<Card
						className='w-100 card-price'
						style={{
							display: open ? 'block' : 'none',
							position: 'fixed',
							top: 0,
							bottom: 0,
							left: 0,
							right: 0,
							zIndex: 999,
						}}
					>
						<CardBody>
							{/* <TextGroup text1='Booking Summary' text2='Close' /> */}
							<div className='text-group'>
								<CardTitle className='font-weight-bolder text-dark'>
									Booking Summary
								</CardTitle>
								<CardText onClick={() => setOpen(!open)}>
									Close
								</CardText>
							</div>
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
				</CSSTransition>
			</Container>
		</footer>
	);
};

export default MobileFooter;
