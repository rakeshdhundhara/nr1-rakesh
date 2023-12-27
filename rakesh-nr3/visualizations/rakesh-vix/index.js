import React from 'react';
import PropTypes from 'prop-types';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  AreaChart,
  Bar,
  BarChart,
} from 'recharts';
import {Card, CardBody, HeadingText, NrqlQuery, Spinner, AutoSizer} from 'nr1';

export default class HomeVisualization extends React.Component {
    static propTypes = {
        fill: PropTypes.string,

        
        stroke: PropTypes.string,
       
        nrqlQueries: PropTypes.arrayOf(
            PropTypes.shape({
                accountId: PropTypes.number,
                query: PropTypes.string,
            })
        ),
    };

   
    transformData = (rawData) => {
        return rawData.map((entry) => ({
            name: entry.metadata.name,
        
            value: entry.data[0].y,
        }));
    };

   
    formatTick = (value) => {
        return value.toLocaleString();
    };

    render() {
        const {nrqlQueries, stroke, fill} = this.props;

        const nrqlQueryPropsAvailable =
            nrqlQueries &&
            nrqlQueries[0] &&
            nrqlQueries[0].accountId &&
            nrqlQueries[0].query;

        if (!nrqlQueryPropsAvailable) {
            return <EmptyState />;
        }
        <>{console.log("hello" , nrqlQueries)}</>


        return (
            
            
            <AutoSizer>
                {({width, height}) => (
                    <NrqlQuery
                        query={nrqlQueries[0].query}
                        accountId={parseInt(nrqlQueries[0].accountId)}
                        pollInterval={3000}
                    >
        
                        {({data, loading, error}) => {  
                            if (loading) {
                                return <Spinner />;
                            }

                            if (error) {
                                return <ErrorState />;
                            }

                            const transformedData = this.transformData(data);

                            return (
                                <>
                                    <RadarChart
                                        width={width}
                                        height={height}
                                        data={transformedData}
                                    >
                                        <PolarGrid />
                                        <PolarAngleAxis dataKey="name" />
                                        <PolarRadiusAxis
                                            tickFormatter={this.formatTick}
                                        />
                                        <Radar
                                            dataKey="value"
                                            stroke={stroke || '#51C9B7'}
                                            fill={fill || '#51C9B7'}
                                            fillOpacity={0.6}
                                        />
                                    </RadarChart>
                                    <LineChart width={width} height={height} data={transformedData}>
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <Tooltip />
                                        <Legend />
                                        <Line
                                            type="monotone"
                                            dataKey="value"
                                            stroke={stroke || 'red'}
                                            fill={fill || '#8884d8'}
                                        />
                                    </LineChart>
                                    <AreaChart width={600} height={400} data={transformedData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Area type="monotone" dataKey="value" fill="yellow" stroke="red" />
                                    </AreaChart>
                                    <BarChart width={600} height={400} data={transformedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="yellow" />
    </BarChart>
                                </>
                            );
                        }}
                    </NrqlQuery>
                )}
            </AutoSizer>
        );
    }
}

const EmptyState = () => (
    <Card className="EmptyState">
        <CardBody className="EmptyState-cardBody">
            <HeadingText
                spacingType={[HeadingText.SPACING_TYPE.LARGE]}
                type={HeadingText.TYPE.HEADING_3}
            >
                Please provide at least one NRQL query & account ID pair
            </HeadingText>
            <HeadingText
                spacingType={[HeadingText.SPACING_TYPE.MEDIUM]}
                type={HeadingText.TYPE.HEADING_4}
            >
                An example NRQL query you can try is:
            </HeadingText>
            <code>
                FROM NrUsage SELECT sum(usage) FACET metric SINCE 1 week ago
            </code>
        </CardBody>
    </Card>
);

const ErrorState = () => (
    <Card className="ErrorState">
        <CardBody className="ErrorState-cardBody">
            <HeadingText
                className="ErrorState-headingText"
                spacingType={[HeadingText.SPACING_TYPE.LARGE]}
                type={HeadingText.TYPE.HEADING_3}
            >
                Oops! Something went wrong.
            </HeadingText>
        </CardBody>
    </Card>
);