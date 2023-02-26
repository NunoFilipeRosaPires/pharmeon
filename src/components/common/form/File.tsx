import { useState } from "react";
import { Button, Card } from "..";
import { IField } from "./types";

export const File = ({ label, handleChange }: IField) => {
  const [fileName, setFileName] = useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    handleChange(event);
    setFileName(event.target.value.split("\\").slice(-1)[0]);
  };

  return (
    <div className="file">
      <label>
        {label}
        <Card>
          <>
            <input type="file" name={label} accept=".pdf,.doc,.docx" onChange={onChange} />
            <Button variant="file">Bestand toevoegen</Button>
            <div className="file__info">{fileName ? fileName : "Geen bestand geselecteerd."}</div>
          </>
        </Card>
      </label>
    </div>
  );
};
