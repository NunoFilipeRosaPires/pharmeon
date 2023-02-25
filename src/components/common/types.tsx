// Description
export interface IDescription {
  children: string;
}

// List
export interface IList<T> {
  list: T[];
  Component: React.ComponentType<T>;
}
