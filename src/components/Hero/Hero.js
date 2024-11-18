import React, { useEffect, useState } from 'react';
import "./Hero.scss";
import Divider from "../Divider/Divider";
import ContactForm from '../ContactForm/ContactForm';

export default function Hero() {
	const [isHeroVisible, setIsHeroVisible] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setIsHeroVisible(true);
		}, 1);
	}, []);

	return (
		<section className='hero'>
			<div className={`hero__columns ${isHeroVisible ? "active" : ""}`}>
				<div className='hero__col'>
					<h2 className='hero__subhead'>
						Your Trusted Partner for Construction and Renovation Services
					</h2>
					<h1 className='hero__title'>
						CLEAR VISION GROUP
					</h1>
					<Divider classes='hero__divider' />

					<p className='hero__text'>
						Clear Vision Group is a dynamic and professional team specializing in construction and renovation services.
						 With years of experience, we excel in providing high-quality solutions for residential and commercial projects.
						  Our team is committed to delivering exceptional results, meeting deadlines, and exceeding client expectations.
					</p>
				</div>
				<div className='hero__col'>
					<ContactForm />
				</div>
			</div>
		</section>
	)
}
