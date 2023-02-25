import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, EmailShareButton } from "react-share";
import { Item } from ".";
import { List as CommonList } from "../List";
import { IShare } from "./types";

export const List = () => {
  const share_url = "www.google.com";
  const socialMediaList: IShare[] = [
    {
      args: {
        url: share_url,
        quote: "Facebook text!",
        hashtag: "#pharmeon",
      },
      Component: FacebookShareButton,
      faIcon: faFacebookF,
    },
    {
      args: {
        url: share_url,
        title: "Twitter title!",
        hashtag: "#pharmeon",
      },
      Component: TwitterShareButton,
      faIcon: faTwitter,
    },
    {
      args: {
        url: share_url,
        title: "LinkedIn title!",
        summary: "LinkedIn summary!",
      },
      Component: LinkedinShareButton,
      faIcon: faLinkedinIn,
    },
    {
      args: {
        url: share_url,
        subject: "Email title!",
        body: "Email body!",
      },
      Component: EmailShareButton,
      faIcon: faEnvelope,
    },
  ];

  return (
    <div className="share">
      <div className="share__title">Deel via:</div>
      <CommonList list={socialMediaList} Component={Item} inline />
    </div>
  );
};
