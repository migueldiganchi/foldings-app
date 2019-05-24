import React from "react";

function AccordionFold(props) {
  let foldContentClassName =
    props.isActive
      ? "accordion-fold-content active"
      : "accordion-fold-content";
  let foldClassName =
    props.isActive
      ? "accordion-fold active"
      : "accordion-fold";

  return (
    <div id={props.fold.id} className={foldClassName}>
      <div
        onClick={() => props.onOpenFold(props.fold.id)}
        className="accordion-fold-header"
        >
        {props.fold.title}
      </div>
      <div className={foldContentClassName}>
        {props.fold.content}
      </div>
    </div>
  );
}

export default AccordionFold;
