import BarChart from "./components/Bar";
import DonutChart from "./components/Donut";

const ChartsOverview = props => {
  return (
    <div>
      <h1>Kendo React Charts Overview</h1>

      <p>
        Kendo React provides a number of useful components that can be used to
        create charts.
      </p>

      <div className="k-display-flex k-gap-16" style={{ maxWidth: 1000 }}>
        <div className="k-flex-grow">
          <h2>Donut</h2>
          <DonutChart />
        </div>
        <div className="k-flex-grow">
          <h2>Bar</h2>
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default ChartsOverview;
