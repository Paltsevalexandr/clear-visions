import React from 'react'
import ServiceTile from '../ServiceTile/ServiceTile';
import Divider from "../Divider/Divider";
import "./Services.scss";
import Section from '../Section/Section';

export default function Services({scrollTop}) {
    const tiles = [
        {
            title: "PAINTING AND FINISHING",
            text: `We specialize in flawless painting and wall finishing to give your space a fresh, polished look.
             Our attention to detail ensures a high-quality result that enhances the beauty and value of your home.`,
            href: ""
        },
        {
            title: "FRAMING",
            text: `Strong, precise framing is the backbone of any structure. We ensure each project is built to last,
                 with accurate measurements and top-notch craftsmanship.`,
            href: ""
        },
        {
            title: "PLASTERING AND DRYWALL",
            text: `From smooth surfaces to seamless edges, we deliver expert plastering and drywall solutions. 
                    Using advanced tools and techniques, we create a durable foundation for your interiors.`,
            href: ""
        },
        {
            title: "ROOFING",
            text: `Protect your home with our professional roofing installation and repair services. 
                    We use high-quality materials to create roofs that are both durable and weather-resistant.`,
            href: ""
        },
        {
            title: "TURNKEY RENOVATIONS",
            text: `Let us handle every aspect of your renovation, from start to finish. 
                    Our comprehensive approach ensures a stress-free process and stunning results tailored to your needs.`,
            href: ""
        },
        {
            title: "TILE INSTALLATION",
            text: `We bring your spaces to life with high-quality tile installations for kitchens, bathrooms, and floors. 
                    From ceramic to marble, we ensure neat, durable, and visually stunning results tailored to your style.`,
            href: ""
        },
    ];
    return (
        <Section classes="services" scrollTop={scrollTop}>
            <h3 className='services__subhead'>
                TRANSFORMING SPACES, CRAFTING LEGACIES
            </h3>
            <div>
                <h2 className='services__title'>
                    Our Services
                </h2>
                <Divider isFullWidth={true} />
            </div>
            
            <div className='services__tiles'>
                {
                    tiles.map((tile, index) => {
                        return (
                            <ServiceTile key={`service-tile-${index}`} tile={tile} />
                        )
                    })
                }
            </div>
        </Section>
    )
}

