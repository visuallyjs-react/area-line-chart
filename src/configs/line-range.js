export default {
    title: {
        text: "Temperature - line range",
        align: "left"
    },
    valueAxis: {
        title: {
            text: "Temperature range"
        }
    },
    series: [
        {
            id: "max",
            maxValueField: "max",
            minValueField: "min",
            label: "Temperature"
        }
    ],
    url: "https://static.visuallyjs.com/data/chart/temperature-range.json",
    tooltip: {
        format: "<b>{{category}}</b><br/><b>Max: </b>{{point.maxValue}}<br/><b>Min: </b>{{point.minValue}}",
    }
}
