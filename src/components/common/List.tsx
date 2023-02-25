import { IList } from "./types";

export function List<T>({ list, Component }: IList<T>) {
  return list && list.length ? (
    <ul className="list">
      {list.map((item: any, index: number) => {
        return <li key={index}>{<Component {...item} />}</li>;
      })}
    </ul>
  ) : null;
}
