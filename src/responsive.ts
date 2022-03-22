import { css } from "styled-components";

export const tablet = (props: any) => {
  return css`
    @media only screen and (min-width: 768px) {
      ${props}
    }
  `;
};
