export default {
    inverted: true,
    title: {
        text: 'Corn vs wheat estimated production for 2023 (Line Inverted)'
    },
    subtitle: {
        text: 'Source: https://www.indexmundi.com/agriculture/?commodity=corn'
    },
    xAxis: {
        showLine: false,
        title: {
            text: "This is the X axis"
        }
    },
    valueAxis: {
        showLine: false,
        min: 0,
        title: {
            text: '1000 metric tons (MT)'
        }
    },
    tooltip: {
        format: "<b>{{category}}</b><br/>{{series.label}}  {{point.value}}",
        valueSuffix: ' (1000 MT)'
    },
    series: [
        { valueField: "corn", label: "Corn" },
        { valueField: "wheat", label: "Wheat" }
    ],
    url: "https://static.visuallyjs.com/data/chart/corn-vs-wheat-production.json",
}
