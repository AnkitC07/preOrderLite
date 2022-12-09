import { TextField } from '@shopify/polaris';
import { useState, useCallback } from 'react';

function TextFieldComp({ value, onChange }) {


  // const handleChange = useCallback((newValue) => setValue(newValue), []);

  return (
    <TextField
      value={value}
      onChange={onChange}
      autoComplete="off"
    />
  );
}
export default TextFieldComp