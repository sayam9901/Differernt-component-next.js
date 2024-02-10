// components/DonutChart.js
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DonutChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Dark Green', 'Light Green', 'Orange', 'Red'],
                datasets: [{
                    data: [20, 30, 25, 25],
                    backgroundColor: ['#008000', '#00FF00', '#FFA500', '#FF0000']
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                    },
                },
            },
        });
    }, []);

    return <canvas ref={chartRef} />;
};

export default DonutChart;
