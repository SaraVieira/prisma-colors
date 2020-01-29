import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 8px 12px;
`;

const Button = styled.button`
  border: none;
  background: #ff851b;
  color: white;
  border: none;
  padding: 8px 12px;
  margin-top: 10px;
  font-weight: bold;
`;

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(name, value);
      }}
    >
      <label htmlFor="name">Name</label>
      <Input id="name" value={name} onChange={e => setName(e.target.value)} />
      <label htmlFor="value">Value</label>
      <Input
        id="value"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Button>Submit</Button>
    </form>
  );
};

export default Form;
