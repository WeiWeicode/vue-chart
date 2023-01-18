<template>
  <div>
    <div>
      <charttest />
    </div>

    <div style="width:1000px;height:600px">
      <Bar :data="data" :options="options" />
    </div>

    <div>
      <FTPinterval />
    </div>

    <!-- <div style="width:1000px;height:600px">
      <testwatt />
    </div> -->

    <div style="width:1000px;height:600px">
      <testwatt2 />
    </div>

  </div>

</template>


<script>


import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import * as echarts from 'echarts'
import { provide } from 'vue'
import * as chartConfig from './chartConfig.js'
import FTPinterval from './components/FTPinterval.vue'
import testwatt from './components/testwatt.vue'
import testwatt2 from './components/testwatt2.vue'
import charttest from './components/charttest.vue'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
export default {
  name: 'App',
  setup() {
    provide('ec', echarts)
  },
  components: {
    Bar,
    FTPinterval,
    testwatt,
    testwatt2,
    charttest
  },
  data() {
    return chartConfig
  }
}



</script>



<style scoped>
.chart {
  height: 400px;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
