/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { colors } from "../../assets/colors";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  transition: ease-in-out;
`;

export const Modal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  height: 193px;
  width: 562px;
  padding: 58px 0 41px 0;
  justify-content: center;
  transform: translate(-50%, -50%);
  background-color: ${colors.offWhite};
  box-shadow: 0px 0px 10px 1px ${colors.background};
  border: 2px solid ${colors.darkPurple};
  border-radius: 30px;
  z-index: 1000;
  transition: ease-in-out;
`;

export const ButtonClose = styled.button`
  color: red;
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 9px;
  width: 9px;
  margin-left: auto;
  margin-right: 39px;
`;

export const Title = styled.h4`
  width: 100%;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 26px;
  justify-self: center;
  text-align: center;
  color: ${colors.purple};
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    !!props.textButton2 === true ? "space-between" : "center"};
  padding: 28px 32px 32px 32px;
  gap: 20px;
`;

export const Button = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor};
  background: ${({ background }) => background};
  font-size: 1.5rem;
  font-weight: 500;
  padding: 10px;
  width: 200px;
  height: 50px;
  color: ${({ textColor }) => textColor};
  border: 1px solid ${colors.lightPurple};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    filter: opacity(0.9);
    color: ${({ backgroundColor }) => backgroundColor};
    background-color: ${({ textColor }) => textColor};
  }
`;

export const ButtonText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase !important;
`;
