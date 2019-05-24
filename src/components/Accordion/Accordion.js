import React from "react";

import AccordionFold from "./AccordionFold";

class Accordion extends React.Component {
  state = {
    openedFoldId: null
  };

  openFold = id => {
    let foldId = null;
    if (!this.state.openedFoldId || this.state.openedFoldId !== id) {
      foldId = id;
    }
    this.setState({ openedFoldId: foldId });
  };

  isFoldActive = id => {
    return this.state.openedFoldId === id;
  };

  render() {
    return (
      <div className="accordion">
        { this.props.foldings.map((fold) => {
          return (
            <AccordionFold
              key={fold.id}
              fold={fold}
              isActive={this.isFoldActive(fold.id)}
              onOpenFold={this.openFold}
            />
          );
        }) }
      </div>
    );
  }
}

export default Accordion;
