import React from 'react';
 
import {
  AreaChart,
  PieChart,
  LineChart,
  BillboardChart,
 
} from 'nr1'
 
 
 
// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction
 
export default class DynamicNerdlet extends React.Component {
  render() {
    return (
      <div>
        <h1>Area Chart</h1>
          <AreaChart className="spacing"
      accountId={4268913}
      query="SELECT average(cpuPercent) FROM SystemSample SINCE 30 MINUTES AGO TIMESERIES"
      fullWidth
      />
 
      <h1>Pie Chart</h1>
      <PieChart className="spacing"
        accountId={4268913}
        query="SELECT latest(host.process.cpuPercent) as 'CPU %', latest(host.process.threadCount) as 'Threads' FROM Metric FACET processId, processDisplayName WHERE `entityGuid` = 'NDI2ODkxM3xJTkZSQXxOQXw4MjI1NDU0NDkwNjE5MDE4NzY3' ORDER BY cpuPercent asc LIMIT 100"
        fullWidth
      />
 
      <h1>Line Chart</h1>
      <LineChart className="spacing"
        accountId={4268913}
        query="SELECT average(host.loadAverageOneMinute) as '1 minute', average(host.loadAverageFiveMinute) AS '5 minutes', average(host.loadAverageFifteenMinute) AS '15 minutes' FROM Metric WHERE `entityGuid` = 'NDI2ODkxM3xJTkZSQXxOQXw4MjI1NDU0NDkwNjE5MDE4NzY3' TIMESERIES auto"
        fullWidth
      />
 
      <h1>BillboardChart</h1>
      <BillboardChart className="spacing"
        accountId={4268913}
        query="SELECT count(*) FROM SystemSample SINCE 30 MINUTES AGO TIMESERIES"
        fullWidth
      />
     
      </div>
    )
  }
}
