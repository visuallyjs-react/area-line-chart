export default {
    title: {
        text: 'Corn vs wheat estimated production for 2023'
    },
    subtitle: {
        text: 'Source: https://www.indexmundi.com/agriculture/?commodity=corn'
    },
    categoryAxis: {
        showLine: false,
        crosshair: true,
        title: {
            text: "Country"
        }
    },
    valueAxis: {
        showLine: false,
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
