import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from "@progress/kendo-react-charts";
import { COLORS } from "../../../../../constants/colors";

// Chart data
const applicationsStatusThisMonth = [
  {
    status: "Accepted",
    value: 10,
    color: COLORS.accepted,
  },
  {
    status: "Interviewing",
    value: 24,
    color: COLORS.interviewing,
  },
  {
    status: "Rejected",
    value: 25,
    color: COLORS.rejected,
  },
  {
    status: "Pending",
    value: 32,
    color: COLORS.pending,
  },
];

// Show category label for each item in the donut graph
const labelContent = e => e.category;

const DonutChart = props => {
  return (
    <Chart>
      <ChartTitle text="Applications status" />
      <ChartLegend visible={false} />
      <ChartSeries>
        <ChartSeriesItem
          type="donut"
          data={applicationsStatusThisMonth}
          categoryField="status"
          field="value"
        >
          <ChartSeriesLabels
            color="#fff"
            background="none"
            content={labelContent}
          />
        </ChartSeriesItem>
      </ChartSeries>
    </Chart>
  );
};

export default DonutChart;
