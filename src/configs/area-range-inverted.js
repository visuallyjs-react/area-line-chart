export default {
    inverted: true,
    title: {
        text: "Temperature - area range, inverted",
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
}
