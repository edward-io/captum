import React from "react";
import cx from "../utils/cx";
import styles from "../App.module.css";

class LabelButton extends React.Component {
  onClick = (e) => {
    e.preventDefault();
    this.props.onTargetClick(this.props.labelIndex, this.props.instance);
  };

  render() {
    return (
      <button
        onClick={this.onClick}
        className={cx({
          [styles.btn]: true,
          [styles["btn--solid"]]: this.props.active,
          [styles["btn--outline"]]: !this.props.active,
        })}
      >
        {this.props.children}
      </button>
    );
  }
}

export default LabelButton;
