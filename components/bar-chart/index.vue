<template>
    <v-chart class="bar-chart" :option="option" :style="{...customStyle}" autoresize></v-chart>
</template>

<script>
import VChart from 'vue-echarts'
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
    TooltipComponent,
    GridComponent,
    MarkLineComponent
} from "echarts/components";

use([
    CanvasRenderer,
    BarChart,
    GridComponent,
    TooltipComponent,
    MarkLineComponent
]);

export default {
    name: 'w-bar-chart',
    components: {
        VChart
    },
    props: {
        data: {
            type: Array
        },
        customStyle: {
            type: Object
        }
    },
    computed: {
        option () {
            return {
                title: {
                    text: 'World Population'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {},
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
                },
                series: this.data
            }
        }
    },
}
</script>

<style scoped>
.bar-chart {
    height: 400px;
}
</style>