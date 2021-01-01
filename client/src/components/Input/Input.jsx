import { useCallback } from "react";

import "./Input.scss";

export const Input = ({ value, setValue, type, placeholder }) => {
  const onChange = useCallback(({ target: { value } }) => setValue(value), [
    setValue,
  ]);

  return (
    <input
      onChange={onChange}
      value={value}
      type={type}
      placeholder={placeholder}
    />
  );
};
