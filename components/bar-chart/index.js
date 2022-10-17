import BarChart from './index.vue';

BarChart.install = function (Vue) {
  Vue.component(BarChart.name, BarChart);
};

export default BarChart;
