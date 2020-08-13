import { css } from "styled-components";
const sizes = {
  phones: 481,
  iPadMinis: 768,
  iPadPros: 834,
};
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
