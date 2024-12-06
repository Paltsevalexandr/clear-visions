import React from 'react'
import Testimonial from '../Testimonial/Testimonial';
import "./Testimonials.scss";
import Section from '../Section/Section';

export default function Testimonials({scrollTop}) {
    const testimonials = [
      {
        username: "Sarah and Michael T., Happy Homeowners",
        text: "Working with Clear Visions was an absolute pleasure! They completely transformed our outdated apartment into a modern, stylish living space. Their attention to detail and commitment to quality were impressive, and they finished the project on time and within budget. Highly recommend their services!",
        date: "May 11, 2024",
      },
      {
        username: "Jessica L.",
        text: "I couldn't be happier with the renovation work done by Clear Visions. They listened to my vision and turned it into reality, even exceeding my expectations. The team was professional, communicative, and left no mess behind. My apartment feels brand new, and I’ve already recommended them to my friends.",
        date: "Feb 21, 2024",
      },
      {
        username: "David P.",
        text: "When I hired Clear Visions, I was nervous about managing a renovation in my busy schedule, but they made it effortless. From start to finish, their team was reliable, efficient, and respectful of my time. My apartment now feels luxurious and comfortable—thank you!",
        date: "Sep 08, 2024",
      },
    ];
  return (
    <Section classes="testimonials" scrollTop={scrollTop}>
        <h2 className='testimonials__title'>
            Testimonials
        </h2>
        <div className='testimonials-wrap'>
            {
                testimonials.map((testimonial, index) => {
                    return (
                        <Testimonial 
                            testimonial={testimonial} 
                            key={`testimonial-${index}`} 
                        />
                    )
                })
            }
        </div>
        {/* <a className='testimonials__link' href="#">
            Leave us a review
        </a> */}
    </Section>
  )
}
