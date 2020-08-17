import React, { Fragment } from 'react';
import 'pretty-checkbox/dist/pretty-checkbox.min.css';
import '@mdi/font/css/materialdesignicons.css';

const CustomRadio = ({ radios }) => {
	return (
		<Fragment>
			{radios.map((radio) => (
				<div
					key={radio}
					className='pretty p-icon p-curve p-pulse p-bigger'
					style={{
						fontSize: '1.3rem',
						marginBottom: '2rem',
					}}
				>
					<input type='radio' name='radio66' />
					<div className='state p-info-o'>
						<i className='icon mdi mdi-check'></i>
						<label>{radio}</label>
					</div>
				</div>
			))}
		</Fragment>
	);
};

export default CustomRadio;
