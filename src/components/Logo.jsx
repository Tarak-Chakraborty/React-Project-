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
      fontSize: '2rem', 
      fontWeight: 'bold',
      color: '#48BB78',
      textShadow: '2px 2px 2px rgba(0, 0, 0, 0.2)', 
      width: '102px', 
      textAlign: 'center', 
      lineHeight: '1', 
      letterSpacing: '2px', 
      border: '1px solid #48BB78', 
      borderRadius: '8px', 
      padding: '10px' 
    }}>
      MegaBlog
    </div>
  );
}

export default Logo;

