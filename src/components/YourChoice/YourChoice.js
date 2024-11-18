import React from 'react';
import painting from "../../assets/images/painting.webp";
import "./YourChoice.scss";
import Section from '../Section/Section';

export default function YourChoice({scrollTop}) {
  return (
    <Section classes="choice" scrollTop={scrollTop}>
		<div className='choice__columns'>
			<div className='choice__col'>
				<img className='choice__img' src={painting} />
			</div>
			<div className='choice__col'>
				<h3 className='choice__subhead'>
					WHAT SETS US APART
				</h3>
				<h2 className='choice__title'>
					Why Opt for Clear Vision Group
				</h2>
				<p className='choice__text'>
				Choose Clear Vision Group for a commitment to excellence that transforms your space with precision and craftsmanship. 
				Our team is dedicated to delivering tailored solutions that meet your unique vision, ensuring your project is completed 
				to the highest standards.
			
				With a focus on clear communication, transparency, and client satisfaction, we provide innovative, 
				lasting results that exceed expectations. Whether it’s an interior renovation or an exterior upgrade, 
				Clear Vision Group goes beyond the ordinary to create spaces that reflect your style and stand the test of time. 
				Your vision is our mission, and we’re here to make it a reality.
				</p>
				<a className="choice__link">
					Get a Free Quote
				</a>
			</div>
		</div>
    </Section>
  )
}
