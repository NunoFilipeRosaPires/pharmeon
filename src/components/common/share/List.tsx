import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, EmailShareButton } from "react-share";
import { Item } from ".";
import { List as CommonList } from "../List";
import { IShare } from "./types";

const SHARE_URL = "www.google.com";
const SHARE_TITLE = "Title!";
const SHARE_COMPONENTS = [FacebookShareButton, TwitterShareButton, LinkedinShareButton, EmailShareButton];
const SHARE_ICONS = [faFacebookF, faTwitter, faLinkedinIn, faEnvelope];

export const List = () => {
  const socialMediaList: IShare[] = SHARE_COMPONENTS.map((component: React.ComponentType<any>, index: number) => {
    return {
      args: {
        url: SHARE_URL,
        title: SHARE_TITLE,
      },
      Component: component,
      faIcon: SHARE_ICONS[index],
    };
  });

  return (
    <div className="share">
      <div className="share__title">Deel via:</div>
      <CommonList list={socialMediaList} Component={Item} inline />
    </div>
  );
};
