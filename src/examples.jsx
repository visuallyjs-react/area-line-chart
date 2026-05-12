import {AreaChartComponent, LineChartComponent} from "@visuallyjs/browser-ui-react";

import BasicLineConfig from "./configs/basic-line"
import LineWithSplineConfig from "./configs/line-with-spline"
import AreaRangeConfig from "./configs/area-range"
import BasicAreaConfig from "./configs/basic-area"
import LineRangeConfig from "./configs/line-range"
import LineRangeInvertedConfig from "./configs/line-range-inverted"
import AreaRangeInvertedConfig from "./configs/area-range-inverted"
import LineInvertedConfig from "./configs/line-inverted"
import AreaInvertedConfig from "./configs/area-inverted"

export const chartOptions = [
    BasicLineConfig,
    LineWithSplineConfig,
    BasicAreaConfig,
    AreaRangeConfig,
    LineRangeConfig,
    LineRangeInvertedConfig,
    AreaRangeInvertedConfig,
    LineInvertedConfig,
    AreaInvertedConfig
]

export const charts = [
    {
        desc:"Line chart, multiple series",
        render:(className) => <LineChartComponent className={className} options={BasicLineConfig}/>,
        options:BasicLineConfig
    },
    {
        desc:"Line chart with spline",
        render:(className) => <LineChartComponent className={className} options={LineWithSplineConfig}/>,
        options:LineWithSplineConfig
    },
    {
        desc:"Basic area chart",
        render:(className) => <AreaChartComponent className={className} options={BasicAreaConfig}/>,
        options:BasicAreaConfig
    },
    {
        desc:"Area range chart",
        render:(className) => <AreaChartComponent className={className} options={AreaRangeConfig}/>,
        options:AreaRangeConfig
    },
    {
        desc:"Line range chart",
        render:(className) => <LineChartComponent className={className} options={LineRangeConfig}/>,
        options:LineRangeConfig
    },
    {
        desc:"Line range chart, inverted",
        render:(className) => <LineChartComponent className={className} options={LineRangeInvertedConfig}/>,
        options:LineRangeInvertedConfig
    },
    {
        desc:"Area range chart, inverted",
        render:(className) => <AreaChartComponent className={className} options={AreaRangeInvertedConfig}/>,
        options:AreaRangeInvertedConfig
    },
    {
        desc:"Line chart, inverted",
        render:(className) => <LineChartComponent className={className} options={LineInvertedConfig}/>,
        options:LineInvertedConfig
    },
    {
        desc:"Area chart, inverted",
        render:(className) => <AreaChartComponent className={className} options={AreaInvertedConfig}/>,
        options:AreaInvertedConfig
    }
]

