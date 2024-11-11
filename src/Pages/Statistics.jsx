import { Helmet } from "react-helmet";
import Nothing from "./../Components/Nothing";

const Statistics = () => {
  return (
    <div>
      <Helmet>
        <title>Stats || Gadgets BD</title>
      </Helmet>
      <div className="min-h-screen">
        <Nothing title={"stats"}></Nothing>
      </div>
    </div>
  );
};

Statistics.propTypes = {};

export default Statistics;
