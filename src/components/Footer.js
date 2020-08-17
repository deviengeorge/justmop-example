import React from 'react';
import { Container, Badge, Row, Col } from 'reactstrap';
import './Footer.css';

const Footer = () => {
	const badges = [
		'Deep Cleaning',
		'Home Cleaning',
		'Carpet Cleaning',
		'Mattress Cleaning',
		'Sofa Cleaning',
		'Curtain Cleaning',
		'Full Time Maid Services',
		'Dry Cleaning & Laundry',
		'A/C Cleaning',
		'Disinfection Service',
		'Household Chores',
	];
	const linksLeft = ['F.A.Q', 'Terms', 'Privacy', 'Career', 'Blog'];
	const linksRight = [
		'Facebook',
		'Twitter',
		'Instagram',
		'8005667',
		'WeCare@justmop.com',
	];

	return (
		<footer>
			<Container>
				<Row
					className='py-3'
					style={{ borderBottom: '1px solid #16161640' }}
				>
					{badges.map((badgeName) => (
						<Badge
							color='dark'
							pill
							key={badgeName}
							className='py-2 px-2 mx-2 mt-3'
						>
							{badgeName}
						</Badge>
					))}
				</Row>

				<Row className='justify-content-between py-3'>
					<Col md={4}>
						<div className='group d-flex justify-content-between'>
							{linksLeft.map((link) => (
								<a
									href='#link'
									key={link}
									style={{ fontSize: '14px' }}
									className='link'
								>
									<p className='m-0'>{link}</p>
								</a>
							))}
						</div>
					</Col>
					<Col md={{ size: 5, offset: 3 }}>
						<div className='group d-flex justify-content-between'>
							{linksRight.map((link) => (
								<a
									href='#link'
									key={link}
									style={{ fontSize: '12px' }}
									className='link link-gray'
								>
									<p className='m-0'>{link}</p>
								</a>
							))}
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
