import { JobDetails, JobResume } from "./components/job";
import { IJob } from "./components/job/types";
import { getJob } from "./utils";
import "./styles/index.scss";

function App() {
  //fetch data
  const data: IJob = getJob();

  return (
    <div className="App">
      <JobDetails {...data} />
      <JobResume {...data.resume} />
    </div>
  );
}

export default App;
