// import React from 'react'

// function Logo({width = '100px '}) {
//   return (
//     <div>MegaBlog</div>
//   )
// }

// export default Logo

import React from 'react';

function Logo({ width = '100px' }) {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      fontSize: '2rem', // Increased font size for emphasis
      fontWeight: 'bold',
      color: '#48BB78', // Light green color, adjust as per preference
      textShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)', // Adds a subtle text shadow
      width: width, // You can customize the width through the 'width' prop
      textAlign: 'center', // Center-align the text
      lineHeight: '1', // Adjusts line height for better spacing
      letterSpacing: '2px', // Increases letter spacing for clarity
      border: '1px solid #48BB78', // Adds a border around the text
      borderRadius: '8px', // Rounds the corners of the border
      padding: '10px' // Adds padding to the text for breathing room
    }}>
      MegaBlog
    </div>
  );
}

export default Logo;

