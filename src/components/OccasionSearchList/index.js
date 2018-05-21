import React from "react";

export default ({ renderItems }) => {
  return <ul>{renderItems()}</ul>;
};
