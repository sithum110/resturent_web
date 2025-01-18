// import React from 'react'

// export default function title(title,fontSize,margin) {

//   return <h1 style={{fontSize,margin,color:'#616161'}}>{title}</h1>
// }


import React from 'react';

// Title component without passing the entire props object as a child
function Title(props) {
  return React.createElement(
    'h1',
    { style: { margin: props.margin } }, // Only apply margin style
    props.title // Pass the title as a valid child (string)
  );
}

export default Title;

