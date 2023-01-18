<template>

    <H1>FTP interval</H1>

    <v-chart class="chart" :option="option" />



</template>

<script setup>

import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide, isRuntimeOnly } from "vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

provide(THEME_KEY, "dark");

const option = ref({
  title: {
    text: "FTP interval",
    left: "center"
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"]
  },
  series: [
    {
      name: "功率區間 (s)",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 500, name: "Z1" },
        { value: 1000, name: "Z2" },
        { value: 600, name: "Z3" },
        { value: 360, name: "Z4" },
        { value: 160, name: "Z5" },
        { value: 100, name: "Z6" },
        { value: 60, name: "Z7" }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
});
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>