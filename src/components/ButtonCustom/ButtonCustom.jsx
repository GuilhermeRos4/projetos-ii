import React from "react";
import Loader from "../Loader/Loader";

import * as s from "./styled-button-custom";

const ButtonCustom = ({
  children,
  purple,
  outlined,
  height,
  width,
  onClick,
  startIcon,
  isLoading,
  disabled,
  type,
}) => (
  <s.ButtonCustom
    type={type || "button"}
    height={height}
    width={width}
    theme={purple ? "purple" : outlined ? "outlined" : "primary"}
    isLoading={isLoading}
    disabled={disabled}
    startIcon={startIcon}
    onClick={onClick}
  >
    {!isLoading && <s.ContainerIcon>{startIcon}</s.ContainerIcon>}
    {isLoading ? <Loader /> : children}
  </s.ButtonCustom>
);

export default ButtonCustom;
