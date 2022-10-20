import React from "react";
import styled from "styled-components";

interface TextInputProps {
  label: string;
  value: any;
  onChange: any;
  placeholder?: string;
  type?: string;
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;

  label {
    font-size: 14px;
  }

  input {
    width: 100%;
    height: 52px;
    padding: 14px;
    background: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    outline: none;
    box-shadow: 0 0 0 1px #878787;
    border: none;
  }
`;

const TextInput = (props: TextInputProps) => {
  return (
    <Box>
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type}
      />
    </Box>
  );
};

export default TextInput;
