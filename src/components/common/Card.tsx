import { ICard } from "./types";

export const Card = ({ children }: ICard) => {
  return <div className="card">{children}</div>;
};
