import React from 'react';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis, VictoryLabel } from "victory";
import PropTypes from 'prop-types';

/** 
 * @Component: it returns line chart  
 * @param {object} graphData - containes x axis and y axis values
*/

function Chart(props) {
    return (
        <VictoryChart theme={VictoryTheme.material} height={200}
            width={400}
        >
            <VictoryAxis
                tickLabelComponent={<VictoryLabel style={{ textAnchor: 'end', fontSize: '4px' }} angle={-75} />}
            />
            <VictoryAxis
                dependentAxis={true}
                tickLabelComponent={<VictoryLabel style={{ fontSize: '4px' }} />}
            />
            <VictoryLine
                style={{
                    data: { stroke: "#c43a31" },
                    labels: { fontSize: 1 },
                    parent: { border: "1px solid #ccc", fontSize: 1 }
                }}
                data={props.graphData}
            />
        </VictoryChart>
    )
}

Chart.propTypes = {
    graphData : PropTypes.object
}

export default Chart;