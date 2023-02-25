import { faBriefcase, faCheck, faClock, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { Description, List } from "../common";
import IconInfo from "./IconInfo";
import { IJob } from "./types";

export const Details = (job: IJob) => {
  console.log(job);

  const workInfoList = [
    { faIcon: faBriefcase, description: job.hoursPerWeek },
    { faIcon: faMoneyBill, description: job.remuneration },
    { faIcon: faClock, description: job.regime },
  ];

  const perksList = job.perks.map((perk: string) => {
    return { faIcon: faCheck, description: perk, variant: "small" };
  });

  return (
    <div className="job-details container">
      <h1 className="job-details__title">{job.title}</h1>
      <List list={workInfoList} Component={IconInfo} />
      <Description>{job.description}</Description>
      <List list={perksList} Component={IconInfo} />
    </div>
  );
};
