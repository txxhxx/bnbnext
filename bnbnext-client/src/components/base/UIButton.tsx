import React from "react";
import styled from "styled-components";

interface UIButtonProps {
  className?: string;
  onClick?: any;
  backgroundColor?: string;
  color?: string;
  children?: React.ReactNode | React.ReactNode[];
}

const StyledButton = styled.button<{
  backgroundColor?: string;
  color?: string;
}>`
  width: 100%;
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  height: 50px;
  border-radius: 5px;
  outline: none;
  border: none;
  justify-content: center;
  margin: 0;
  font-weight: 600;
  cursor: pointer;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  color: ${(props) => (props.color ? props.color : "#000")};
`;

const UIButton = (props: UIButtonProps) => {
  return (
    <StyledButton backgroundColor={props.backgroundColor} color={props.color}>
      {props.children}
    </StyledButton>
  );
};

export default UIButton;
