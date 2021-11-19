import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { colors } from "../../assets/colors";

const CustomLoader = ({ size, style }) => (
  <div className="loader" style={style}>
    <Loader
      type="ThreeDots"
      color={colors.white}
      height={size || 50}
      width={size || 50}
      style={style || { marginBottom: "-5px" }}
    />
  </div>
);

export default CustomLoader;
