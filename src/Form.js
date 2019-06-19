import React, { useState } from "react";

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
      <input id="name" value={name} onChange={e => setName(e.target.value)} />
      <label htmlFor="value">Value</label>
      <input
        id="value"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
