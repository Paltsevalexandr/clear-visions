import React from 'react';
import "./WorkDescription.scss";
import Section from "../Section/Section";

export default function WorkDescription({scrollTop}) {
    
  return (
    <Section classes="description" scrollTop={scrollTop}>
        <div className='description__columns'>
            <div className='description__col'>
                <div className='description__img-wrap'>
                    <img className='description__img'
                        src="https://lirp.cdn-website.com/65d60e57/dms3rep/multi/opt/home_page_about+%281%29-397w.jpg"
                        alt="Top image" />
                </div>
                
            </div>
            <div className='description__col'>
                <h3 className='description__subhead'>
                    PAINTING DREAMS, BUILDING REALITIES
                </h3>
                <h2 className='description__title'>
                    Clear Vision Group : Crafting Your Vision, Building with Excellence
                </h2>
                <p className='description__text'>
                    AClear Vision Group is a trusted name in construction and renovation services, 
                    with over five years of hands-on experience. Our dedicated team brings skill, 
                    precision, and innovation to every project, ensuring your spaces are transformed 
                    with care and attention to detail.
                </p>
                <p className='description__text'>
                    Specializing in painting, drywall, framing, roofing, and turnkey renovations, 
                    we go beyond standard construction services. Our focus is on creating durable, 
                    beautifully crafted solutions that align with your unique vision and elevate your home or business.
                </p>
                <p className='description__text'>
                    At Clear Vision Group, we see ourselves not just as contractors, but as artisans of transformation. 
                    With expertise and a client-focused approach, we bring your ideas to life, delivering results that 
                    exceed expectations. Explore our portfolio and discover why Clear Vision Group is the go-to choice 
                    for those who value craftsmanship, quality, and lasting excellence.
                </p>
                <a href="#" className='description__contact-link'>
                    Get A Free Quote
                </a>
            </div>
        </div>
    </Section>
  )
}

