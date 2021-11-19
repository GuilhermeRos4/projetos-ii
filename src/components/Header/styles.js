import styled from "styled-components";
import { colors } from "../../assets/colors";

export const Header = styled.header`
  height: 4.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  /* position: fixed;
	top: 0;
	width: 100%;
	background-color: ${colors.background};
	z-index: 666; tentei fazer o menu fixado mas acho que preciso da  props do tamanho do menu*/

  padding: 0 1.25rem;

  padding-bottom: 1px solid ${colors.lightGrey};

  div {
    display: flex;
  }

  .Left-Header {
    text-align: center;
    align-items: center;
    color: ${colors.white};

    h1 {
      font-size: 2.25rem;
      font-weight: 600;
      margin-left: 15px;
    }
  }
`;
export const RightHeader = styled.div`
  button {
    border: none;
    background-color: transparent;
  }

  .Menu {
    text-align: center;
    align-items: center;
    color: ${colors.white};
    font-weight: 500;
    cursor: pointer;
    svg {
      margin-right: 7px;
    }
    span {
      padding: 0 5px;
    }
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  display: block;
  background-color: ${colors.white};
  transition: ease;
  top: calc(4.5rem);
  right: 16px;
  border-radius: 10px;
  border: 1px solid ${colors.division};
  box-shadow: 4px 4px 15px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
  height: 300px;
  padding-bottom: 14px;
  width: 264px;
  cursor: default;
`;

export const DropdownList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h5 {
    color: ${colors.text.lightGrey};
    font-size: 0.75rem;
    line-height: 1rem;
    padding: 8px 0;
  }
`;

export const MenuHeader = styled.div`
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
  border-bottom: 1px solid ${colors.background};
  h4 {
    color: ${colors.primaryBlue};
    font-weight: 700;
    line-height: 24px;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  p {
    font-size: 0.875rem;
    color: #707070;
    line-height: 1rem;
    font-weight: 500;
  }
`;

export const MenuItem = styled.div`
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 16px;
  ul {
    list-style-type: none;
    padding-left: 16px;

    li {
      text-align: left;
      line-height: 24px;
      font-size: 0.875rem;
      a {
        text-decoration: none;
        color: black;
        font-weight: 500;
      }
    }

    button {
      border: none;
      background-color: transparent;
    }
  }
`;
