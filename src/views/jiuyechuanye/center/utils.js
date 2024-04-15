export function randomPieSeries(center, radius, series = {}) {
    const number = Math.floor(Math.random() * 100 + radius);
    const data = ['A'].map((t) => {
        return { value: number, center, name: Math.random() + '' };
    });
    return {
        type: 'pie',
        zlevel: 10,
        coordinateSystem: 'geo',
        tooltip: { show: false },
        label: {
            show: true,
            fontSize: radius / 2,
            formatter: `${number}人`,
            position: 'center',
            color: '#fff'
        },
        labelLine: { show: false },
        animationDuration: 0,
        radius,
        center,
        data,
        itemStyle: { color: '#0ea6f3' },
        ...series
    };
}