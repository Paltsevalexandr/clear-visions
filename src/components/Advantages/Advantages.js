import React from 'react';
import Divider from "../Divider/Divider";
import "./Advantages.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faPaintRoller, faBrush } from '@fortawesome/free-solid-svg-icons';
import AdvantagesCol from '../AdvantagesCol/AdvantagesCol';
import Section from '../Section/Section';

export default function Advantages({scrollTop}) {
	const columns = [
		{
			title: "PREMIUM MATERIALS",
			icon: faMedal,
			text: `We use only high-quality materials and advanced tools to ensure our work is built to last. 
					Whether it’s painting, drywall, or framing, our solutions are designed to withstand the test of 
					time and enhance your space.`
		},
		{
			title: "PRECISION CRAFTSMANSHIP",
			icon: faPaintRoller,
			text: `Our skilled team delivers impeccable results with attention to every detail. From smooth plaster 
					finishes to precise tile installation, we ensure flawless execution that elevates the overall look
					 and feel of your project.`
		},
		{
			title: "TURNKEY EXCELLENCE",
			icon: faBrush,
			text: `Our comprehensive approach means we handle every step of your renovation project, ensuring seamless 
					coordination and a stress-free experience. Achieve stunning, professional results without compromising 
					on quality or timelines.`
		},
	]
	return (
		<Section classes="advantages" scrollTop={scrollTop}>
			
			<h3 className='advantages__subhead'>
				GUIDING EXCELLENCE, BUILDING TRUST
			</h3>
				
			<div className='advantages__header'>
				<h2 className='advantages__title'>
					OUR ADVANTAGES
				</h2>
				<Divider isFullWidth={true} classes="advantages__divider"  />
			</div>
			<div className='advantages__columns'>

				{
					columns.map((col, index) => {
						return (
						<AdvantagesCol key={`adv-col-${index}`} icon={col.icon} 
							text={col.text} title={col.title} />
						)
					})
				}
			</div>
			{/* <a href="#" className='advantages__about-us'>
				About Us
			</a> */}
			
		</Section>
	)
}

