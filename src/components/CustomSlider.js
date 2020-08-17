import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Mousewheel } from 'swiper';
import 'swiper/swiper-bundle.css';
import BadgePrice from './BadgePrice';

// To make swiper use navigation, mousewheel module to use arrows ( next, prev ) and to scroll in the slider
SwiperCore.use([Navigation, Mousewheel]);

const CustomSlider = () => {
	const [active, setActive] = useState('2 BR (AED 1099)');

	const prices = [
		'1 BR (AED 799)',
		'2 BR (AED 1099)',
		'3 BR (AED 1399)',
		'4 BR (AED 1699)',
		'5 BR (AED 1999)',
	];
	return (
		<Swiper
			className='w-100'
			freeMode
			slidesPerView={2}
			slidesOffsetAfter={50}
			slidesOffsetBefore={50}
			spaceBetween={15}
			breakpoints={{
				// when window width is >= 640px
				640: {
					slidesPerView: 1,
				},
				// when window width is >= 1280px
				1000: {
					slidesPerView: 3,
				},
			}}
			navigation
			mousewheel={{
				sensitivity: 0.6,
			}}
		>
			{prices.map((price) => (
				<SwiperSlide key={price} onClick={() => setActive(price)}>
					<BadgePrice
						active={active === price ? 'active' : ''}
						text={price}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default CustomSlider;
