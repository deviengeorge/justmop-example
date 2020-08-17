import React from 'react';
import './Header.css';

import {
	Container,
	Collapse,
	Navbar,
	NavbarBrand,
	Nav,
	NavbarText,
} from 'reactstrap';

const Header = () => {
	return (
		<React.Fragment>
			<Navbar
				color='white'
				light
				expand='md'
				fixed='top'
				style={{ borderBottom: '1px solid #00000026' }}
			>
				<Container fluid style={{ justifyContent: 'center' }}>
					<NavbarBrand href='/'>
						<img
							width='130'
							src='https://justcdn.s3.eu-central-1.amazonaws.com/prod/assets/static/logov2.png'
							alt='Hello'
						/>
					</NavbarBrand>
					<Collapse navbar>
						<Nav
							className='ml-auto'
							navbar
							style={{
								fontSize: '0.81rem',
								fontFamily: 'HKGrotesk bold',
							}}
						>
							<NavbarText className='mx-3 px-2 login'>
								Login
								<img
									width='16'
									src='https://justcdn.s3.eu-central-1.amazonaws.com/prod/assets/static/avatar.svg'
									alt='login'
									className='ml-1'
								/>
							</NavbarText>
							<NavbarText className='mx-3 text-black'>
								العربية
							</NavbarText>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</React.Fragment>
	);
};

export default Header;
