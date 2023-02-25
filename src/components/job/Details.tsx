import { IJob } from "./types";

export const Details = (props: IJob) => {
  console.log(props);
  const { title } = props;

  return (
    <div className="job-details container">
      <h1 className="job-details__title">{title}</h1>
    </div>
  );
};
