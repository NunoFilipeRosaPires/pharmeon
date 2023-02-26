import { IList } from "./types";

export function List<T>({ list, Component, inline = false }: IList<T>) {
  return list && list.length > 0 ? (
    <ul className={`list ${inline ? "list--inline" : ""}`}>
      {list.map((item: any, index: number) => {
        return <li key={index}>{<Component {...item} />}</li>;
      })}
    </ul>
  ) : null;
}
