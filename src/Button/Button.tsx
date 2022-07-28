// Generated with util/create-component.js
import React from "react";
import { Button as BSButton } from "react-bootstrap";

import { ButtonProps } from "./Button.types";

// import "./Button.scss";

const Button: React.FC<ButtonProps> = ({ label }) => (
    <BSButton>{label}</BSButton>
);

export default Button;

