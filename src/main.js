import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import { Bar } from 'vue-chartjs'
// import * as echarts from 'echarts'


// createApp(App).mount('#app')
const app = createApp(App)
// app.config.globalProperties.echarts = echarts
// app.component('Bar', Bar)
app.mount('#app')


