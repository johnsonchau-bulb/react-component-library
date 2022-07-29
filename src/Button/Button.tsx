import React from "react";

import "./Button.scss";

export interface ButtonProps {
  foo: string;
}

const Button: React.FC<ButtonProps> = ({ foo }) => (
    <div data-testid="Button">{foo}</div>
);

export default Button;

