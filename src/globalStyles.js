import { injectGlobal } from "emotion";

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: AvenirNext;
  }
  @font-face {
    font-family: AvenirNext;
    src: url(./avenir-next-medium.woff) format('woff');
  }
`;
