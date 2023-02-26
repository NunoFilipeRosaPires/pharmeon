import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IIconInfo } from "./types";

export const IconInfo = (props: IIconInfo) => {
  const { description, faIcon, variant } = props;

  const iconVariantClass = variant ? "icon-info__icon--" + variant : "icon-info__icon";
  const descriptionVariantClass = variant ? "icon-info__description--" + variant : "icon-info__description";

  return (
    <div className={`icon-info ${variant ? "icon-info--" + variant : ""}`}>
      <div className={iconVariantClass}>
        <FontAwesomeIcon icon={faIcon} />
      </div>
      <div className={descriptionVariantClass}>{description}</div>
    </div>
  );
};
