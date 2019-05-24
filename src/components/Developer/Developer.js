import React from "react";

function Developer(props) {
  const developerClassName = props.isActive ? 
    "dev active" : 
    "dev";
  return (
    <div className={developerClassName}>
      <small>
        by &nbsp;
        <a href={props.developer.url} 
          target="_blank"
          rel="noopener noreferrer">
          { props.developer.name }
        </a>
      </small>
    </div>
  );
}

export default Developer;
