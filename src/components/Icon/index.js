import React from "react";
import pathMap from "./pathMap";

export default class Icon extends React.Component {
  defaultProps = { color: "#000", size: 24 };
  render() {
    const { color, type, size } = this.props;
    return (
      <svg
        style={{ width: `${size}px`, height: `${size}px` }}
        viewBox="0 0 1024 1024"
      >
        <path fill={color} d={pathMap[type]} />
      </svg>
    );
  }
}
