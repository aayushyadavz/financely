import { Line } from '@ant-design/charts';
import React from 'react'

const ChartComponent = ({ sortedTrannsactions }) => {
    const data = sortedTrannsactions.map((item) => {
        return { year: item.data, value: item.amount }
    })

    const config = {
        data,
        width: 600,
        height: 300,
        xField: 'year',
        yField: 'value',
    };

    return (
        <div className='chart-wrapper'>
            <div>
                <h2 style={{ marginTop: 0 }}>Your Analytics</h2>
                <Line {...config} />
            </div>
            <div>
                <h2>Your Spendings</h2>
            </div>
        </div>
    )
}

export default ChartComponent