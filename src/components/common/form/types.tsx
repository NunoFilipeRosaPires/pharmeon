// Form
export interface IForm {
  onSubmit: (data: FormData) => void;
  textFields: string[];
  fileFields: string[];
}

// Fields
export interface IField {
  label: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
