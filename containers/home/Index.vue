<template>
    <div class="content-warp">
        <div class="index">
            <div class="content">
                <p class="title">大盘看法</p>
                <p class="info">市场震荡向下，以防守为主，注意前低2638附近的支撑</p>
            </div>
            <div class="content">
                <p class="title">仓位建议</p>
                <p class="info-highlight">60%</p>
            </div>
            <div class="content">
                <p class="title">行业看法</p>
                <div class="chart-box">
                    <p>未来20交易日行业偏好</p>
                    <p>2018/6/22</p>
                    <chart :options="option"></chart>
                </div>
            </div>
        </div>
        <tabs type="index"></tabs>
    </div>

</template>

<script>
    import Vue from 'vue';
    import ECharts from 'vue-echarts/components/ECharts.vue';
    import '../../less/home/index.less';
    import Tabs from '../../components/Tabs';
    import http from '../../utils/http';
    import 'echarts/lib/chart/bar';
    import 'echarts/lib/component/tooltip';

    Vue.component('chart', ECharts);

    export default {
        name: 'Index',
        data() {
            return {
                option: {}
            };
        },
        props: [],
        components: {Tabs, chart: ECharts},
        computed: {},
        created() {
            this.getData();
        },
        methods: {
            getData() {
                let labelRight = {position: 'left'};
                let industryNameList = [];
                let industryNumberList = [];
                http.get('/smartinfo/list', {smartType: 3})
                    .then(resp => {

                        resp.map(item=>{
                            industryNameList.push(item.industryName);
                            if(item.industryNumber>0){
                                industryNumberList.push({value:item.industryNumber,label: labelRight});
                            }else{
                                industryNumberList.push(item.industryNumber);
                            }
                        });
                        this.option = {
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                }
                            },
                            xAxis: [
                                {
                                    type: 'value',
                                    position: 'top',
                                    splitLine: {lineStyle: {type: 'dashed'}},
                                    axisLabel: {color: '#fff'}
                                }
                            ],
                            yAxis: [
                                {
                                    type: 'category',
                                    axisLine: {show: false},
                                    axisLabel: {show: false},
                                    axisTick: {show: false,},
                                    splitLine: {show: false},
                                    data: industryNameList,
                                    inverse:true,
                                }
                            ],
                            series: [
                                {
                                    type: 'bar',
                                    itemStyle: {
                                        normal: {
                                            color: '#be3c2d',
                                            borderRadius: 5,
                                            label: {
                                                show: true,
                                                position: 'insideRight',
                                                formatter: '{b}',
                                                color: '#FFF'
                                            }
                                        }
                                    },
                                    data: industryNumberList
                                }
                            ]
                        };
                    })

            }
        },
        mounted() {
            //  http.get('/smartinfo/list', {smartType: 3})
        }
    }
</script>

