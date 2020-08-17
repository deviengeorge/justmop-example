import React, { Fragment } from 'react';
import Header from './components/Header';
import {
	Container,
	Row,
	Col,
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	Input,
	Button,
} from 'reactstrap';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';

import CustomSlider from './components/CustomSlider';
import CustomHeading from './components/CustomHeading';
import CustomRadio from './components/CustomRadio';
import TextGroup from './components/TextGroup';
import Footer from './components/Footer';
import MobileFooter from './components/MobileFooter';

function App() {
	return (
		<Fragment>
			<div className='web'>
				<Header />
				<Container style={{ marginTop: 80 }}>
					<p className='text-city text-blue d-flex'>
						dubai
						<img
							src='https://justcdn.s3.eu-central-1.amazonaws.com/prod/assets/static/down-arrow-blue-has-background.svg'
							alt='svg'
							className='ml-1'
						/>
					</p>
					<h3 className='heading'>Service Details</h3>
					<StepProgressBar
						startingStep={0}
						primaryBtnClass='hidden'
						secondaryBtnClass='hidden'
						steps={[
							{
								label: 'Service Details',
							},
							{
								label: 'Date & Time',
							},
							{
								label: 'Payment',
							},
						]}
					/>

					<Row>
						<Col md={{ size: 7 }} sm='12'>
							<Card
								style={{ padding: '2.2rem 1.25rem' }}
								className='overflow-hidden'
							>
								<CardBody style={{ padding: 0 }}>
									<ul className='card-description'>
										<li>Recommended for new houses & apartments.</li>
										<li>
											Thorough sanitation of all the areas including
											inside cabinets.
										</li>
										<li>
											Pressure vacuuming and removal of grease & oil
											stains by a special deep cleaning team.
										</li>
										<li>
											Floor scrubbing with professional cleaning
											equipment.
										</li>
									</ul>
								</CardBody>

								<CustomHeading text='Type of home' />

								<CustomRadio radios={['Apartment', 'Villa']} />

								<CustomHeading text='Number of bedrooms?' />

								<CustomSlider />

								<CustomHeading text='Do you have any specific instructions?' />

								<Input
									type='textarea'
									placeholder='Example: Moving in, stains on walls, clean kitchen appliances, etc.'
								/>
							</Card>
							<Card
								style={{
									padding: '1rem 1.5rem',
									display: 'flex',
									alignItems: 'flex-end',
								}}
							>
								<Button
									color='warning'
									className='px-5 py-2 text-light font-weight-bold'
									style={{ borderRadius: '2.5rem' }}
								>
									NEXT
								</Button>
							</Card>
						</Col>

						<Col md='5'>
							<Card className='w-100 card-price'>
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
									<TextGroup
										text1='Total'
										text2='AED 799.00'
										blueColor
									/>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
				<Footer />
			</div>
			<div className='mobile'>
				<Header />
				<Container style={{ marginTop: 80 }}>
					<p className='text-city text-blue d-flex'>
						dubai
						<img
							src='https://justcdn.s3.eu-central-1.amazonaws.com/prod/assets/static/down-arrow-blue.svg'
							alt='svg'
							className='ml-1'
						/>
					</p>

					<h3 className='heading'>Service Details</h3>

					<StepProgressBar
						wrapperClass='w-100 px-0'
						startingStep={0}
						primaryBtnClass='hidden'
						secondaryBtnClass='hidden'
						steps={[
							{
								label: 'Service Details',
							},
							{
								label: 'Date & Time',
							},
							{
								label: 'Payment',
							},
						]}
					/>

					<Row>
						<Col md={12} sm={12}>
							<Card
								style={{ padding: '2.2rem 1.25rem' }}
								className='overflow-hidden border-0'
							>
								<CardBody style={{ padding: 0 }}>
									<ul className='card-description'>
										<li>Recommended for new houses & apartments.</li>
										<li>
											Thorough sanitation of all the areas including
											inside cabinets.
										</li>
										<li>
											Pressure vacuuming and removal of grease & oil
											stains by a special deep cleaning team.
										</li>
										<li>
											Floor scrubbing with professional cleaning
											equipment.
										</li>
									</ul>
								</CardBody>

								<CustomHeading text='Type of home' />

								<CustomRadio radios={['Apartment', 'Villa']} />

								<CustomHeading text='Number of bedrooms?' />

								<CustomSlider />

								<CustomHeading text='Do you have any specific instructions?' />

								<Input
									type='textarea'
									placeholder='Example: Moving in, stains on walls, clean kitchen appliances, etc.'
								/>
							</Card>
							<Card
								style={{
									padding: '1rem 1.5rem',
									display: 'flex',
									alignItems: 'flex-end',
								}}
							>
								<Button
									color='warning'
									className='px-5 py-2 text-light font-weight-bold'
									style={{ borderRadius: '2.5rem' }}
								>
									NEXT
								</Button>
							</Card>
						</Col>
					</Row>
				</Container>
				<MobileFooter />
			</div>
		</Fragment>
	);
}

export default App;
