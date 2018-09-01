<template>
    <div class="content-warp">
        <div class="intelligence">
            <div class="content content1" flex="box:mean">
                <div>
                    <img src="../../images/intelligence/trend.png" alt="" class="icon">
                    <p class="info">趋势策略</p>
                </div>
                <div>
                    <img src="../../images/intelligence/trade.png" alt="" class="icon">
                    <p class="info">回转交易策略</p>
                </div>
                <div>
                    <img src="../../images/intelligence/ai.png" alt="" class="icon">
                    <p class="info">AI策略</p>
                </div>
                <div>
                    <img src="../../images/intelligence/custom.png" alt="" class="icon">
                    <p class="info">自定义策略</p>
                </div>
            </div>
            <div class="content">
                <div class="title">
                    本周推荐：<span class="high-light">趋势策略</span>
                </div>
                <div class="doughnut-box">
                    <chart :options="option"></chart>

                </div>
            </div>
            <div class="content" flex="main:justify">
                <div class="info-box">
                    <p class="high-light big">10.13%</p>
                    <p class="info">预期年化收益率</p>
                </div>
                <div class="info-box">
                    <p class="high-light big">6.13%</p>
                    <p class="info">预期最大回撤</p>
                </div>
            </div>
            <div class="content-2">
                <div flex="box:mean main:center" class="line-tab">
                    <div :class="{'active':!active}" @click.stop="checkTab(0)">历史业绩</div>
                    <div :class="{'active':active}" @click.stop="checkTab(1)">最大回撤</div>
                </div>
                <div class="line-box">
                    <line-chart :data="lineDatas" :options="lineOptions" :chart-data="lineDatas"
                                :height="200"></line-chart>
                </div>
                <div flex="box:mean" class="duration-tab">
                    <div :class="{'year-active':duration===5}" @click.stop="durationCheck(5)">近5年</div>
                    <div :class="{'year-active':duration===3}" @click.stop="durationCheck(3)">近3年</div>
                </div>

            </div>
        </div>
        <tabs type="intelligence"></tabs>
    </div>

</template>

<script>
    import '../../less/home/intelligence.less';
    import Tabs from '../../components/Tabs';
    import LineChart from '../../tools/line';
    import http from '../../utils/http';
    import Vue from 'vue';
    import ECharts from 'vue-echarts/components/ECharts.vue';
    import 'echarts/lib/chart/pie';
    import 'echarts/lib/component/legend';

    Vue.component('chart', ECharts);
    export default {
        name: 'Intelligence',
        data() {
            return {
                option: {},
                duration: 5,
                active: 0,
                lineOptions: {
                    tooltips: {
                        mode: 'index'
                    },
                    scales: {
                        yAxes: [{
                            stacked: true,
                            ticks: {
                                beginAtZero: false,
                                callback: function (value, index, values) {
                                    return value.toFixed(2);
                                }
                            },
                            gridLines: {
                                display: true,
                            }
                        }],
                        /*  yAxes: [{
                         id: 'left-y-axis',
                         type: 'linear',
                         position: 'left'
                         }, {
                         id: 'right-y-axis',
                         type: 'linear',
                         position: 'right'
                         }],*/
                        xAxes: [{
                            gridLines: {
                                display: false,
                            }
                        }]
                    },
                    legend: {
                        display: true,
                        position: 'bottom'
                    },
                    responsive: true,
                    maintainAspectRatio: false
                },
            };
        },
        props: [],
        components: {Tabs, LineChart},
        computed: {},
        created() {
            this.getData();
            this.getLineData([22, 2], [3, 33]);
        },
        methods: {
            checkTab(num) {
                this.active = num;
                if (num && this.duration === 5) {
                    this.getLineData([67, 8], [33, 7])
                }
                if (num && this.duration === 3) {
                    this.getLineData([0, 33], [65, 7])
                }
                if (this.duration === 5 && !num) {
                    this.getLineData([25, 3], [74, 7])
                }
                if (this.duration === 3 && !num) {
                    this.getLineData([73, 3], [25, 7])
                }

            },
            durationCheck(num) {
                this.duration = num;
                if (num === 5 && this.active) {
                    this.getLineData([67, 8], [33, 7])
                }
                if (num === 3 && this.active) {
                    this.getLineData([0, 33], [65, 7])
                }
                if (num === 5 && !this.active) {
                    this.getLineData([25, 3], [74, 7])
                }
                if (num == 3 && !this.active) {
                    this.getLineData([73, 3], [25, 7])
                }
            },
            getData() {
                let pieData = [{value: 43.22, name: 1, itemStyle: {color: '#eed955'}},
                    {value: 31.17, name: 2, itemStyle: {color: '#da7574'}},
                    {value: 13.55, name: 3, itemStyle: {color: '#e6b144'}},
                    {value: 8.53, name: 4, itemStyle: {color: '#de8551'}},
                    {value: 4.53, name: 5, itemStyle: {color: '#80b273'}},
                    {value: 0, name: 6, itemStyle: {color: '#e2ea59'}}];

                this.option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'right',
                        y: 'center',
                        formatter: function (name) {
                            if (name === 1)
                                return '香港股票' + pieData[name - 1].value + '%';
                            if (name === 2)
                                return '大盘股票' + pieData[name - 1].value + '%';
                            if (name === 3)
                                return '美国股票' + pieData[name - 1].value + '%';
                            if (name === 4)
                                return '小盘股票' + pieData[name - 1].value + '%';
                            if (name === 5)
                                return '黄金' + pieData[name - 1].value + '%';
                            if (name === 6)
                                return '其他' + pieData[name - 1].value + '%';
                        },
                        align: 'left',
                        data: [{name: 1, icon: 'circle'},
                            {name: 2, icon: 'circle'},
                            {name: 3, icon: 'circle'},
                            {name: 4, icon: 'circle'},
                            {name: 5, icon: 'circle'},
                            {name: 6, icon: 'circle'}]
                    },
                    series: [
                        {
                            name: '配比说明',
                            type: 'pie',
                            radius: ['40%', '80%'],
                            avoidLabelOverlap: false,
                            center: ['30%', '50%'],
                            label: {
                                normal: {
                                    show: true,
                                    position: 'center',
                                    formatter: function () {
                                        return '配比说明'
                                    },
                                    color:'#73b3be',
                                    fontSize:14
                                },
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: pieData
                        }
                    ]
                };

                /*  http.get('/smartinfo/list',{smartType:3})
                      .then(resp=>{
                          console.log(resp);
                      })*/
            },
            getLineData(arr1, arr2) {
                this.lineDatas = {
                    labels: ['2015-06-26', '2018-06-25'],
                    datasets: [
                        {
                            label: '等级5',
                            backgroundColor: '#ef8159',
                            data: arr1,
                            borderColor: '#ef8159',
                            fill: false,
                            borderWidth: 1,
                            pointBackgroundColor: 'transparent',
                            pointStyle: 'circle',
                            hitRadius: 10,
                            radius: 0
                        },
                        {
                            label: '比较基准（56%中证全债+44%上证指数）',
                            backgroundColor: '#5b92b5',
                            borderColor: '#5b92b5',
                            data: arr2,
                            fill: false,
                            borderWidth: 1,
                            pointBackgroundColor: 'transparent',
                            pointStyle: 'dash'
                        }
                    ]
                };
            },
        },
        mounted() {
        }
    }
</script>

