// Button
export interface IButton {
  children: string | JSX.Element;
  variant?: string;
}

// Card
export interface ICard {
  children: string | JSX.Element;
}

// Description
export interface IDescription {
  children: string;
}

// List
export interface IList<T> {
  list: T[];
  Component: React.ComponentType<T>;
  inline?: boolean;
}
