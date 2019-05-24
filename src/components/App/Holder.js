import React from 'react';

function Holder (props) {

  return (
    <div className="App">
      { props.title ? <h3>{ props.title }</h3> : null }
      { props.children }
    </div>
  );
};

export default Holder;