import { IButton } from "./types";

export const Button = ({ children, variant }: IButton) => {
  const classVariant = variant ? "button--" + variant : "";

  return <button className={`button ${classVariant}`}>{children}</button>;
};
