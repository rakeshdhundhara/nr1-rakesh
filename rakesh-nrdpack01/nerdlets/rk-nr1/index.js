// import React from "react";
// import { LineChart } from "nr1";

// export default class DynamicLine extends React.Component {
//   render() {
//     const versionASignups = {
//       metadata: {
//         id: "version-a-newsletter-signups",
//         name: "Version A",
//         viz: "main",
//         color: "blue",
//       },
//       data: [
//         { x: 0, y: 0 },
//         { x: 10, y: 10 },
//         { x: 20, y: 15 },
//         { x: 30, y: 5 },
//         { x: 40, y: 30 },
//         { x: 50, y: 25 },
//       ],
//     };
//     const versionCSignups = {
//       metadata: {
//         id: "version-b-newsletter-signups",
//         name: "Version B",
//         viz: "main",
//         color: "green",
//       },
//       data: [
//         { x: 0, y: 15 },
//         { x: 10, y: 5 },
//         { x: 20, y: 25 },
//         { x: 30, y: 45 },
//         { x: 40, y: 50 },
//         { x: 50, y: 35 },
//       ],
//     };
//     const versionBSignups = {
//       metadata: {
//         id: "version-b-newsletter-signups",
//         name: "Version C",
//         viz: "main",
//         color: "Yellow",
//       },
//       data: [
//         { x: 0, y: 30 },
//         { x: 10, y: 5 },
//         { x: 20, y: 25 },
//         { x: 30, y: 45 },
//         { x: 40, y: 50 },
//         { x: 50, y: 35 },
//       ],
//     };
//     return (
//       <LineChart className="spacing" // Use LineChart instead of lineChart
//         accountId={4268913}
//         query="SELECT average(host.loadAverageOneMinute) as '1 minute', average(host.loadAverageFiveMinute) AS '5 minutes', average(host.loadAverageFifteenMinute) AS '15 minutes' FROM Metric WHERE `entityGuid` = 'NDI2ODkxM3xJTkZSQXxOQXw4MjI1NDU0NDkwNjE5MDE4NzY3' TIMESERIES auto"
//         fullWidth
//       />
//     );
//   }
// }
import React from "react";
import { LineChart, PieChart } from "nr1";

export default class DynamicCharts extends React.Component {
  render() { 
        const versionASignups = {
          metadata: {
            id: "version-a-newsletter-signups",
            name: "Version A",
            viz: "main",
            color: "blue",
          },
          data: [
            { x: 0, y: 0 },
            { x: 10, y: 10 },
            { x: 20, y: 15 },
            { x: 30, y: 5 },
            { x: 40, y: 30 },
            { x: 50, y: 25 },
          ],
        };
        const versionCSignups = {
          metadata: {
            id: "version-b-newsletter-signups",
            name: "Version B",
            viz: "main",
            color: "green",
          },
          data: [
            { x: 0, y: 15 },
            { x: 10, y: 5 },
            { x: 20, y: 25 },
            { x: 30, y: 45 },
            { x: 40, y: 50 },
            { x: 50, y: 35 },
          ],
        };
        const versionBSignups = {
          metadata: {
            id: "version-c-newsletter-signups",
            name: "Version C",
            viz: "main",
            color: "Yellow",
          },
          data: [
            { x: 0, y: 30 },
            { x: 10, y: 5 },
            { x: 20, y: 25 },
            { x: 30, y: 45 },
            { x: 40, y: 50 },
            { x: 50, y: 35 },
          ],
        };
    const lineChartData = {
    // ... (your LineChart data)
    };

    const pieChartData = {
    // ... (your PieChart data)
    };

    return (
      <div>
        <LineChart
          className="spacing"
          accountId={4268913}
          query="SELECT average(host.loadAverageOneMinute) as '1 minute', average(host.loadAverageFiveMinute) AS '5 minutes', average(host.loadAverageFifteenMinute) AS '15 minutes' FROM Metric WHERE `entityGuid` = 'NDI2ODkxM3xJTkZSQXxOQXw4MjI1NDU0NDkwNjE5MDE4NzY3' TIMESERIES auto"
          fullWidth
        />

        <PieChart
          className="spacing"
          accountId={4268913}
          data={[versionASignups, versionCSignups, versionBSignups]}
          fullWidth
        />
      </div>
    );
  }
}
