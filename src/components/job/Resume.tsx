import { ResumeItem } from ".";
import { Card, Description, List } from "../common";
import { IJobResume } from "./types";

export const Resume = (resume: IJobResume) => {
  return (
    <div className="job-resume">
      <div className="container">
        <h2 className="job-resume__title">{resume.title}</h2>
        <Description>{resume.description}</Description>
        <Card>
          <>
            <h3 className="job-resume__position">{resume.position}</h3>
            <List list={Object.entries(resume.details)} Component={ResumeItem} />
          </>
        </Card>
      </div>
    </div>
  );
};
