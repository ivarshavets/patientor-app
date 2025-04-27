import { useState } from "react";

interface InputProps {
  label: string;
}

const InputField = ({label}: InputProps) => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.SyntheticEvent) => {
    setValue(e.target.value)
  }

  return (
    <label>
      {label}
      <input
        value={value}
        onChange={handleChange}
      />
    </label>
  )
}

export default InputField
