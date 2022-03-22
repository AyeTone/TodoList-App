import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
`;

export const Form = styled.form`
  display: flex;
  width: 90%;
  position: relative;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 50px;
  padding: 20px 30px;
  font-size: 25px;
  border: none;
  transition: 0.2s;
  box-shadow: inset 0 0 5px black;

  &:focus {
    box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.2);
    outline: none;
  }
`;

export const Button = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  margin: 12px;
  border-radius: 50px;
  right: 0;
  border: none;
  background-color: #2f74c0;
  color: white;
  transition: 0.2s;
  box-shadow: 0 0 10px black;

  &:hover {
    background-color: #388ae2;
  }

  &:active {
    transform: scale(0.8);
    box-shadow: 0 0 5px black;
  }
`;
