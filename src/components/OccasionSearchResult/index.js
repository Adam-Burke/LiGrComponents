import React from "react";
import { css } from "emotion";
import { colors } from "../../theme";

const SearchResultStyles = css({
  display: "flex",
  flexDirection: "column",
  padding: "1rem 1.5rem",
  border: "solid 1px #dbdcfc"
});

export default ({ matchName, timeTillStart, dateString }) => {
  return (
    <li className={SearchResultStyles}>
      <div
        style={{
          fontSize: "20px",
          color: colors.text,
          letterSpacing: "-0.32px",
          margin: "0 1rem 0.5rem 0"
        }}
      >
        {matchName}
      </div>
      <div
        style={{
          fontSize: "14px",
          color: colors.accent,

          margin: "0 1rem 0.25rem 0"
        }}
      >
        {timeTillStart}
      </div>
      <div
        style={{
          fontSize: "14px",
          color: colors.lightText,
          margin: "0 1rem 0.25rem 0"
        }}
      >
        {dateString}
      </div>
    </li>
  );
};
