<template>
    <div class="content-warp">
        <div class="intelligence" style="padding-bottom: 0">

            <div class="content">
                <div class="title" flex="box:mean">
                    <span class="high-light" style="text-align: center;margin-left: 2rem">趋势策略</span>
                    <span style="margin-left: 2rem">{{dateFormat(currentStage.createTime,'yyyy-MM-dd')}}</span>
                </div>
                <div class="doughnut-box">
                    <chart :options="option"></chart>

                </div>
            </div>
            <div class="content" flex="main:justify">
                <div class="info-box">
                    <p class="high-light big">{{rate}}</p>
                    <p class="info">预期年化收益率</p>
                </div>
                <div class="info-box">
                    <p class="high-light big">{{maxReback}}</p>
                    <p class="info">预期最大回撤</p>
                </div>
            </div>
            <div class="content-2">
                <div flex="box:mean main:center" class="line-tab">
                    <div :class="{'active':!active}" @click.stop="checkTab(0)">历史业绩</div>
                    <div :class="{'active':active}" @click.stop="checkTab(1)">最大回撤</div>
                </div>
                <div class="line-box">
                    <chart :options="lineOption" class="line-chart"></chart>
                    <!--
                                        <line-chart :data="lineDatas" :options="lineOptions" :chart-data="lineDatas"
                                                    :height="200"></line-chart>-->
                </div>
                <div flex="box:mean" class="duration-tab">
                    <div :class="{'year-active':duration===5}" @click.stop="durationCheck(5)">近5年</div>
                    <div :class="{'year-active':duration===3}" @click.stop="durationCheck(3)">近3年</div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
    import '../../less/home/intelligence.less';
    import Vue from 'vue';
    import ECharts from 'vue-echarts/components/ECharts.vue';
    import 'echarts/lib/chart/pie';
    import 'echarts/lib/chart/line';
    import 'echarts/lib/component/legend';
    import 'echarts/lib/component/tooltip';
    import dateFormat from '../../utils/date-format';

    Vue.component('chart', ECharts);
    export default {
        name: 'Intelligence',
        data() {
            return {
                option: {},
                duration: 5,
                active: 0,
                pieOpt: {
                    itemStyles: [{
                        color: '#eed955'
                    }, {
                        color: '#da7574'
                    }, {
                        color: '#e6b144'
                    }, {
                        color: '#de8551'
                    }, {
                        color: '#80b273'
                    }, {
                        color: '#e2ea59'
                    }]
                },
                pieData: [],
                lineOption: {},
                type: 1,
                rate: '10.63%',
                maxReback: '66.03%',
                currentStage: {}
            };
        },
        props: [],
        components: {},
        computed: {},
        created() {
            this.currentStage = JSON.parse(window.sessionStorage.getItem('comb-detail'));
            this.checkType(this.type);
        },
        methods: {
            dateFormat(time, format) {
                let date = new Date(time);
                return dateFormat.format(date, format);
            },
            checkType(num) {
                this.type = num;
                let {currentStage, pieOpt} = this;
                let pieData = [];
                let levelFive = [];
                let argLongName = [];
                console.log(currentStage);

                (currentStage.strategyAssignment || []).map((strate, index) => {
                    pieData.push({
                        value: strate.percentage,
                        name: strate.ratioName + (strate.percentage * 100).toFixed(2) + '%',
                        itemStyle: pieOpt.itemStyles[index],
                        icon: 'circle'
                    })
                });

                if (num === 1) {
                    this.rate = '63.34%';
                    this.maxReback = '0.03%';
                    levelFive = [-.2, 0, .1, .2, .05, -.1, .01];
                    argLongName = [.01, -.1, .05, .2, .1, 0, -.2];
                }
                if (num === 2) {

                    this.rate = '2.22%';
                    this.maxReback = '1.11%';
                    levelFive = [77.2, 3, 22, 2, 66, -11, .01];
                    argLongName = [4.01, .1, 5.05, 2.2, 77.1, 40, 3.2];
                }
                if (num === 3) {

                    this.rate = '99.11%';
                    this.maxReback = '44.47%';
                    levelFive = [34.2, 30, 4.1, 5.2, 32.05, 11.1, 21];
                    argLongName = [55, 2, .05, 22, 3, 44, .77];
                }
                if (num === 4) {

                    this.rate = '60.34%';
                    this.maxReback = '13.95%';
                    levelFive = [-33.2, 11, .2, 3.54, 1.05, 44.1, 1.01];
                    argLongName = [-.01, .1, -.05, 2.2, 45.1, 0, 22.2];
                }

                this.getPieData(pieData);
                this.getLineData(levelFive, argLongName);
            },

            durationCheck(num) {
                this.duration = num;
                if (num === 5 && this.active) {
                    this.getLineData([67, 8, 44, 33, 2.2, 33, 2], [-.33, -7, 22, 74, 23, 23, 6]);
                }
                if (num === 3 && this.active) {
                    this.getLineData([.43, 12, 56, 34, 67, 23, 56], [65, 7, 23, 76, 34, 76, 23]);
                }
                if (num === 5 && !this.active) {
                    this.getLineData([25, 3, 43, 22, 54, 23, 78], [74, 7, 77, 34, 22, 4.4, 2.3]);
                }
                if (num == 3 && !this.active) {
                    this.getLineData([73, 3, 76, 23, 88, 55, 2.2], [25, 7, 22, 89, 32, 4.5, 34]);
                }
            },
            getPieData(pieData) {
                console.log(pieData);
                this.option = {
                    tooltip: {
                        show: false,
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'right',
                        y: 'center',
                        formatter: function (name) {
                            console.log(name);
                            return name;
                        },
                        align: 'left',
                        data: pieData
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
                                    color: '#73b3be',
                                    fontSize: 14
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
            },
            getLineData(levelFive, argLongName) {
                this.lineOption = {
                    grid: {
                        top: 10,
                        bottom: 80
                    },
                    tooltip: {
                        trigger: 'axis',
                        position: ['10%', '0%']
                    },
                    legend: {
                        data: [{
                            name: '等级5',
                            icon: 'line',
                        }, {
                            name: '比较基准（56%中证全债+44%上证指数）',
                            icon: 'line'
                        }],
                        x: 'center',
                        orient: 'vertical',
                        bottom: 0,
                        textStyle: {
                            color: '#000',
                            fontWeight: 'bold'
                        },
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: {show: true},
                            dataView: {show: true, readOnly: false},
                            magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    calculable: true,
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['2015-06-25', '', '', '', '', '', '2018-06-25']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '等级5',
                            type: 'line',
                            stack: '总量',
                            data: levelFive,
                            symbol: 'none'
                        },
                        {
                            name: '比较基准（56%中证全债+44%上证指数）',
                            type: 'line',
                            stack: '总量',
                            data: argLongName,
                            symbol: 'none'
                        }
                    ]
                };
            }
        },
        mounted() {
        }
    }
</script>

