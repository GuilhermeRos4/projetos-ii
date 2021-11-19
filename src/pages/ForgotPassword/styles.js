/* eslint-disable no-constant-condition */
import styled from "styled-components";

import { colors } from "../../assets/colors";
/* import { images } from "../../assets/images"; */

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${colors.white};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Card = styled.div`
  width: 650px;
  height: 400px;

  border: 2px solid ${colors.purple};
  display: flex;
  position: relative;
  border-radius: 15px;
  flex-direction: column;
`;

export const CardTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-top: 50px;
  align-content: center;
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 30px;
  width: 100%;
  padding: 30px;

  .signup-button {
    background-color: ${colors.white};
    border: 1px solid ${colors.purple};
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: center;
    height: 50px;
    width: 100%;
    padding: 0 100px;
    border-radius: 10px;
    color: ${colors.purple};
    padding: 0 10px;

    :hover {
      color: (${colors.purple} -50%);
      filter: brightness(0.9);
    }
  }

  @media (min-width: 700px) {
    padding: 0px 50px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;

export const LoginError = styled.div`
  color: ${colors.primaryRed};
  font-size: 1.125rem;
  line-height: 27px;

  /* identical to box height, or 150% */
  letter-spacing: -0.05em;
`;
export const FormLabel = styled.label`
  display: block;
  line-height: 26px;
  font-size: 1.25rem;
  font-weight: 600;
  padding-top: 25px;
  padding-bottom: 10px;
  color: ${colors.black};
`;

export const FormInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  color: ${colors.black};
  padding: 0 8px;
  border: 1px solid
    ${({ isInvalid }) => (isInvalid ? colors.primaryRed : colors.purple)};
`;

export const ButtonsDiv = styled.div`
  margin-top: 50px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
