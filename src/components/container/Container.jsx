import React from 'react'

function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
  
}

export default Container

// import React from 'react';

// function Container({ children }) {
//   const fullScreenStyle = {
//     width: '100%',
//     height: '100%', // Setting height to 100% of viewport height
//     maxWidth: '100%', // Optional: Adjust maximum width if needed
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     paddingLeft: '4px', // Adjust padding as required
//     paddingRight: '4px', // Adjust padding as required
//   };

//   return <div style={fullScreenStyle}>{children}</div>;
// }

// export default Container;


//