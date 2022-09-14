import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import './Testimonial.scss';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
const Testimonial = () => {
  const testimonials = [
    {
      name: 'Usman Salami',
      company: 'Crenet',
      img: 'https://avatars.githubusercontent.com/u/43177042?s=100&v=4',
      feedback:
        'I Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusantium voluptatum officiis inventore ipsam eaque atque. Ad eveniet rerum explicabo laboriosam vitae iste illo animi vel! Et impedit adipisci fugit?',
    },
    {
      name: 'John Doe',
      company: 'Google',
      img: 'https://www.typeform.com/templates/images/template-page/testimonials/avatar-kyle-maltz-dollar-flight-club@1x.webp',
      feedback:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusantium voluptatum officiis inventore ipsam eaque atque. Ad eveniet rerum explicabo laboriosam vitae iste illo animi vel! Et impedit adipisci fugit?',
    },
    {
      name: 'Jonny Rodger',
      company: 'Slack',
      img: 'https://www.typeform.com/templates/images/template-page/testimonials/avatar-johnny-rodgers-slack@1x.webp',
      feedback:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusantium voluptatum officiis inventore ipsam eaque atque. Ad eveniet rerum explicabo laboriosam vitae iste illo animi vel! Et impedit adipisci fugit?',
    },
    {
      name: 'Rand FishKin',
      company: 'SpartToro',
      img: 'https://www.typeform.com/templates/images/template-page/testimonials/avatar-rand-fishkin-sparktoro@1x.webp',
      feedback:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusantium voluptatum officiis inventore ipsam eaque atque. Ad eveniet rerum explicabo laboriosam vitae iste illo animi vel! Et impedit adipisci fugit?',
    },
  ];
  const brands = [
    {
      img: images.slack,
      name: 'slack',
    },
    {
      img: images.slack,
      name: 'slack',
    },
    {
      img: images.slack,
      name: 'slack',
    },
    {
      img: images.slack,
      name: 'slack',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={testimonials[currentIndex].img} alt="img" />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
          <div className="app__testimonial-brands app__flex">
            {brands.map((item, index) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, type: 'tween' }}
                key={Math.random()}
              >
                <img src={item.img} alt={item.name} />
              </motion.div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(Testimonial, 'testimonial');
