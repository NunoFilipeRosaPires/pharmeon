import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IShare } from "./types";

export const Item = (props: IShare) => {
  const { args, Component, faIcon } = props;
  return (
    <div className="share__item">
      <Component {...args}>
        <FontAwesomeIcon icon={faIcon} />
      </Component>
    </div>
  );
};
