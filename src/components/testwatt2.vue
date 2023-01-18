<template>
    <h1>20min FTP</h1>
    <div id="customerChart" style="width: 100%; height: 100%;"></div>

</template>
  
<script>
import { inject, onMounted } from "vue";

export default {
    name: "data_page",
    setup() {
        let echarts = inject("ec");//引入
        onMounted(() => {//需要获取到element,所以是onMounted的Hook
            let myChart = echarts.init(document.getElementById("customerChart"));
            // 绘制图表
            myChart.setOption({
                title: { text: "20min FTP" },
                tooltip: {},
                xAxis: {
                    data: ["0.1min", "0.5min", "10min", "5min", "10min", "20min"],
                },
                yAxis: {},
                series: [
                    {
                        name: "watt",
                        type: "line",
                        data: [700, 500, 400, 300, 280, 250],
                    },
                ],
            });
            window.onresize = function () {//自适应大小
                myChart.resize();
            };
        });
    },
    components: {},
    // mounted() {
    //     let myChart = this.$root.echarts.init(
    //         document.getElementById("myChart")
    //     );
    //     // 绘制图表
    //     myChart.setOption({
    //         title: { text: "总用户量" },
    //         tooltip: {},
    //         xAxis: {
    //             data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
    //         },
    //         yAxis: {},
    //         series: [
    //             {
    //                 name: "用户量",
    //                 type: "line",
    //                 data: [5, 20, 36, 10, 10, 20],
    //             },
    //         ],
    //     });
    // },
};

</script>