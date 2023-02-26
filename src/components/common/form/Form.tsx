import { useState } from "react";
import { File, Text } from ".";
import { Button } from "../Button";
import { IForm } from "./types";

export const Form = (props: IForm) => {
  const { textFields, fileFields, onSubmit } = props;

  const [formData, setFormData] = useState<FormData>(new FormData());

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    formData.set(name, value);
    setFormData(formData);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    if (files && files[0]) {
      formData.set(name, files[0]);
      setFormData(formData);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {textFields.map((field: string) => {
        return <Text key={field} label={field} handleChange={handleTextChange} />;
      })}
      {fileFields.map((field: string) => {
        return <File key={field} label={field} handleChange={handleFileChange} />;
      })}
      <Button>Soliciteren</Button>
    </form>
  );
};
