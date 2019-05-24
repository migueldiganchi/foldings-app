import React from "react";

function Developer(props) {
  return (
    <div className="dev">
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
