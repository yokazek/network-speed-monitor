/**
 * Shared Chart.js configuration and datasets
 */

export const getCommonDatasets = (downloadData = [], uploadData = [], pingData = []) => [
    {
        label: 'Download (Mbps)',
        borderColor: '#38bdf8',
        backgroundColor: 'rgba(56, 189, 248, 0.1)',
        borderWidth: 3,
        tension: 0.4,
        fill: true,
        data: downloadData,
        yAxisID: 'y'
    },
    {
        label: 'Upload (Mbps)',
        borderColor: '#4ade80',
        backgroundColor: 'rgba(74, 222, 128, 0.1)',
        borderWidth: 3,
        tension: 0.4,
        fill: true,
        data: uploadData,
        yAxisID: 'y'
    },
    {
        label: 'Ping (ms)',
        borderColor: '#f472b6',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderDash: [5, 5],
        tension: 0.4,
        fill: false,
        data: pingData,
        yAxisID: 'y1'
    }
];

export const getChartOptions = (options = {}) => {
    const defaultOptions = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
            legend: { labels: { color: '#94a3b8', font: { family: 'Inter' } } }
        },
        scales: {
            x: {
                grid: { color: 'rgba(255, 255, 255, 0.05)' },
                ticks: { color: '#94a3b8' }
            },
            y: {
                type: 'linear', display: true, position: 'left',
                title: { display: true, text: 'Speed (Mbps)', color: '#94a3b8' },
                grid: { color: 'rgba(255, 255, 255, 0.1)' },
                ticks: { color: '#94a3b8' }
            },
            y1: {
                type: 'linear', display: true, position: 'right',
                title: { display: true, text: 'Ping (ms)', color: '#f472b6' },
                grid: { drawOnChartArea: false },
                ticks: { color: '#f472b6' },
                min: 0
            }
        }
    };

    return { ...defaultOptions, ...options };
};
