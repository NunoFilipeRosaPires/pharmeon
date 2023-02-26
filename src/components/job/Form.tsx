import { Form as CommonForm } from "../common/form";

const TEXT_FIELDS = ["Voornaam", "Achternaam", "E-mailadres", "Mobiel nummer"];
const FILE_FIELDS = ["CV", "Motivatiebrief"];

export const Form = () => {
  const handleSubmit = (formData: FormData) => {
    TEXT_FIELDS.concat(FILE_FIELDS).forEach((field: string) => console.log(field + ":", formData.get(field)));
  };

  return (
    <div className="job-form">
      <h2 className="job-form__title">Soliciteren</h2>
      <CommonForm onSubmit={handleSubmit} textFields={TEXT_FIELDS} fileFields={FILE_FIELDS} />
    </div>
  );
};
