export const ResumeItem = (item: string[]) => {
  const key = item[0],
    value = item[1];

  return (
    <div className="job-resume-item">
      <div className="job-resume-item__key">{key}</div>
      <div className="job-resume-item__value">{value}</div>
    </div>
  );
};
