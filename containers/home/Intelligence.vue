<template>
    <div class="intelligence">
        <div class="body">
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
                    <p class="doughnut-info">配比说明</p>
                    <doughnut :data="datas" :options="options" :chart-data="datas" :height="200"></doughnut>
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
                    <div :class="{'active':duration===5}" @click.stop="durationCheck(5)">近5年</div>
                    <div :class="{'active':duration===3}" @click.stop="durationCheck(3)">近3年</div>
                </div>

            </div>
        </div>

        <tabs type="intelligence"></tabs>
    </div>
</template>

<script>
    import '../../less/home/intelligence.less';
    import Tabs from '../../components/Tabs';
    import Doughnut from '../../tools/doughnut';
    import LineChart from '../../tools/line';

    export default {
        name: 'Intelligence',
        data() {
            return {
                duration:5,
                active: 0,
                datas: {},
                options: {
                    scales: {},
                    legend: {
                        display: true,
                        position: 'right',
                        labels: {
                            usePointStyle: true,
                            padding: 20
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false
                },
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
        components: {Tabs, Doughnut, LineChart},
        computed: {},
        created() {
            this.getData();
        },
        methods: {
            checkTab(num) {
                this.active = num;
            },
            durationCheck(num){
               this.duration = num;
            },
            getData() {
                this.datas = {
                    labels: ['香港股票43.22%', '大盘股票30.17%', '美国股票13.55%', '小盘股票8.53%', '黄金4.53%', '其他0.00%'],
                    datasets:
                        [
                            {
                                label: '七日年化',
                                backgroundColor: ['#eed955', '#da7574', '#e6b144', '#de8551', '#80b273', '#e2ea59'],
                                data: [43.22, 30.17, 13.55, 8.53, 4.53, 0.00],
                                fill: false,
                                borderWidth: 1,
                                pointBackgroundColor: 'transparent',
                                pointStyle: 'circle',
                                hitRadius: 10,
                                radius: 0
                            }
                        ]
                };
                this.lineDatas = {
                    labels: ['2015-06-26', '2018-06-25'],
                    datasets: [
                        {
                            label: '等级5',
                            backgroundColor: '#ef8159',
                            data: [1, 2],
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
                            data: [12, 22],
                            fill: false,
                            borderWidth: 1,
                            pointBackgroundColor: 'transparent',
                            pointStyle: 'dash'
                        }
                    ]
                };
            }
        },
        mounted() {
        }
    }
</script>
<style lang="less" scoped>
    .intelligence {
        .body {
            width: 100%;
            height: 100%;
            overflow-y: scroll;
        }

        .content1 {
            text-align: center;
        }
        .big {
            font-size: 1.3rem;
            font-weight: 600;
        }
        .content {
            margin-top: .5rem;
            background: #fff;
            padding: .8rem;
            position: relative;
            .icon {
                width: 1.1rem;
            }
            .info {
                margin-top: .25rem;
                font-size: .6rem;
                color: #666;
            }
            .title {
                font-weight: bold;
                color: #333;
            }
            .high-light {
                color: red;
            }
            .doughnut-box {
                margin-top: 1rem;
            }
            .doughnut-info {
                position: absolute;
                left: 23%;
                top: 54%;
                color: #73b3be;
            }
            .info-box {
                text-align: center;
            }
        }
        .content-2 {
            background: #fff;
            margin-top: .5rem;
            padding-bottom: 2rem;
        }
        .line-tab {
            text-align: center;
            height: 2rem;
            border-bottom: 1px solid #dedede;
            line-height: 2rem;
            margin-bottom: 1rem;
            .active {
                color: #1a478e;
                border-bottom: 2px solid #1a478e;
                font-weight: bold;
            }
        }
        .duration-tab {
            border: 1px solid #1a478e;
            margin: 1rem 1.2rem;
            height: 1.8rem;
            line-height: 1.8rem;
            border-radius: 0.4rem;
            color: #1a478e;
            text-align: center;
            .active{
                background: #1a478e;
                color: #fff;
            }
        }
    }
</style>
