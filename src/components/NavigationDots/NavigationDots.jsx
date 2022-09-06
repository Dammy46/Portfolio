import React from 'react';
import './NavigationDots.scss';
const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={`link${index}`}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: '#313bac' } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
