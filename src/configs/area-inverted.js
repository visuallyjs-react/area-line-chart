export default {
    inverted: true,
    title: {
        text: 'Corn vs wheat 2023'
    },
    subtitle: {
        text: 'Source: https://www.indexmundi.com/agriculture/?commodity=corn'
    },
    xAxis: {
        showLine: false,
        crosshair: true,
        title: {
            text: "This is the X axis"
        }
    },
    valueAxis: {
        showLine: false,
        showGrid: false,
        min: 0,
        title: {
            text: '1000 metric tons (MT)'
        }
    },
    series: [
        { valueField: "corn", label: "Corn" },
        { valueField: "wheat", label: "Wheat" }
    ],
    url: "https://static.visuallyjs.com/data/chart/corn-vs-wheat-production.json",
}
