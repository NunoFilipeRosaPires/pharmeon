export interface IJob {
  description: string;
  hoursPerWeek: string;
  perks: string[];
  regime: string;
  remuneration: string;
  resume: IJobResume;
  title: string;
}

export interface IJobResume {
  description: string;
  details: IJobDetails;
  position: string;
  title: string;
}

export interface IJobDetails {
  [key: string]: string;
}
