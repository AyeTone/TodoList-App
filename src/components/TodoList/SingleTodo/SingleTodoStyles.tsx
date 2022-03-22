import styled, { css } from "styled-components";
import { tablet } from "../../../responsive";

const Shared = css`
  flex: 1;

  padding: 5px;
  border: none;

  font-size: 1.3rem;
`;

export const Form = styled.form`
  width: 90%;

  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 20px;
  margin-top: 15px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.6);

  background-color: white;

  ${tablet({
    width: "43%",
  })}
`;

export const Span = styled.span`
  ${Shared}

  &:focus {
    outline: none;
  }
`;

export const Done = styled.s`
  ${Shared}
`;

export const Edit = styled.input`
  ${Shared}

  box-shadow: inset 0 5px 10px rgba(0,0,0,0.2);
  border-radius: 5px;
  padding: 5px 10px;
  transition: all 0.25s;

  &:focus {
    outline: none;
    box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.1),
      0 5px 10px rgba(0, 0, 0, 0.6);
  }
`;

export const BtnsContainer = styled.div``;

export const Icons = styled.span`
  margin-left: 10px;
  font-size: 25px;
  cursor: pointer;
`;
