import { faBriefcase, faCheck, faClock, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Form, IconInfo } from ".";
import { Description, List, ShareList } from "../common";
import { IJob } from "./types";

export const Details = (job: IJob) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const workInfoList = [
    { faIcon: faBriefcase, description: job.hoursPerWeek },
    { faIcon: faMoneyBill, description: job.remuneration },
    { faIcon: faClock, description: job.regime },
  ];

  const perksList = job.perks.map((perk: string) => {
    return { faIcon: faCheck, description: perk, variant: "small" };
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="job-details">
      <div className="container job-details__row">
        <div className="job-details__column">
          <h1 className="job-details__title">{job.title}</h1>
          <List list={workInfoList} Component={IconInfo} inline={windowWidth >= 992} />
          <Description>{job.description}</Description>
          <List list={perksList} Component={IconInfo} />
          <ShareList />
        </div>
        <div className="job-details__column">
          <Form />
        </div>
      </div>
    </div>
  );
};
