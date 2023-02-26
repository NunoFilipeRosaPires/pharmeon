import { IField } from "./types";

export const Text = ({ label, handleChange }: IField) => {
  return (
    <input
      className="text"
      type="text"
      placeholder={label}
      name={label}
      id={label.toLowerCase().replaceAll(" ", "-")}
      onChange={handleChange}
    />
  );
};
