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
                    <index-bar :data="datas" :options="options" :chart-data="datas" class="chart"></index-bar>
                </div>
            </div>
        </div>
        <tabs type="index"></tabs>
    </div>

</template>

<script>
    import '../../less/home/index.less';
    import Tabs from '../../components/Tabs';
    import IndexBar from '../../tools/bar';

    export default {
        name: 'Index',
        data() {
            return {
                datas: {},
                options: {
                    scales: {
                        yAxes: [{
                            stacked: true,
                            ticks: {
                                /* fontColor: '#fff',*/
                                beginAtZero: false,
                                callback: function (value, index, values) {
                                    return value;
                                }
                            },
                            gridLines: {
                                display: false
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
                            ticks: {
                                /*fontColor: '#fff',*/
                            },
                            position: 'top',
                            gridLines: {
                                display: true,
                                /* color: '#999'*/
                            }
                        }]
                    },
                    legend: {
                        display: false,
                        position: 'bottom'
                    },
                    responsive: true,
                    maintainAspectRatio: false
                }
            };
        },
        props: [],
        components: {Tabs, IndexBar},
        computed: {},
        created() {
            this.getData();
        },
        methods: {
            getData() {
                this.datas = {
                    labels: ['电子元器件', '计算机', '通信', '电力设备', '有色金属', '非银行金融', '国防军工', '传媒', '机械', '综合', '建材', '轻工制造', '家电', '食品饮料', '纺织服装', '基础化工', '餐饮旅游', '钢铁', '石油石化', '农林牧渔', '银行', '商贸零售', '建筑', '汽车', '电力及公用事业', '煤炭', '交通运输','医药'],
                    datasets:
                        [
                            {
                                label: '七日年化',
                                backgroundColor: ['#ce2d21', '#ce2d21','#ce2d21','#ce2d21','#ce2d21','#ce2d21','#ce2d21','#ce2d21','#ce2d21','#ce2d21','#ce2d21','#ce2d21','#ce2d21','#ce2d21','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green','green'],
                                data: [.2,.18,.14,.12,.07,.06,.05,.04,.03,.03,.03,.005,0,0,-.01,-.02,-.04,-.05,-.06,-.07,-.08,-.085,-.085,-.09,-.1,-.12,-.13,-.14],
                                fill: false,
                                borderWidth: 1,
                                pointBackgroundColor: 'transparent',
                                pointStyle: 'circle',
                                hitRadius: 10,
                                radius: 0
                            }
                        ]
                }
                ;
            }
        },
        mounted() {
        }
    }
</script>
<style scoped lang="less">
    .index {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        .content {
            padding: .8rem;
            background: #fff;
            margin-top: .5rem;
            text-align: center;
            .title {
                font-size: .7rem;
                color: #333;
                font-weight: bold;
            }
            .info {
                margin-top: 1rem;
                color: #666;
            }
            .info-highlight {
                font-size: 1.5rem;
                margin-top: 1rem;
                color: red;
            }
            .chart-box {
                margin-top: 1rem;
                // background: linear-gradient(top,#272727,#585858,#585858,#2f2f2f);
                color: #666;
                text-align: center;
                font-size: .6rem;
                padding: .5rem 0;
            }
        }

    }
</style>
