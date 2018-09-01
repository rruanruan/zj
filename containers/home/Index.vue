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
    import IndexBar from '../../tools/bar';
    import http from '../../utils/http';
    import 'echarts/lib/chart/bar';
    import 'echarts/lib/component/tooltip';
    Vue.component('chart', ECharts);

    export default {
        name: 'Index',
        data() {
            return {
                option:{}
            };
        },
        props: [],
        components: {Tabs, IndexBar,chart: ECharts},
        computed: {},
        created() {
            this.getData();
        },
        methods: {
            getData() {
                let labelRight = {position:'left'};
                     this.option = {
                         tooltip : {
                             trigger: 'axis',
                             axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                 type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                             }
                         },
                         xAxis : [
                             {
                                 type : 'value',
                                 position: 'top',
                                 splitLine: {lineStyle:{type:'dashed'}},
                             }
                         ],
                         yAxis : [
                             {
                                 type : 'category',
                                 axisLine: {show: false},
                                 axisLabel: {show: false},
                                 axisTick: {show: false},
                                 splitLine: {show: false},
                                 data: ['电子元器件', '计算机', '通信', '电力设备', '有色金属', '非银行金融', '国防军工', '传媒', '机械', '综合', '建材', '轻工制造', '家电', '食品饮料', '纺织服装', '基础化工', '餐饮旅游', '钢铁', '石油石化', '农林牧渔', '银行', '商贸零售', '建筑', '汽车', '电力及公用事业', '煤炭', '交通运输','医药'],

                             }
                         ],
                         series : [
                             {
                                 type:'bar',
                                 itemStyle : { normal: {
                                         color: '#be3c2d',
                                         borderRadius: 5,
                                         label : {
                                             show: true,
                                             position: 'insideRight',
                                             formatter: '{b}',
                                             color:'#FFF'
                                         }
                                     }},
                                 data:[
                                     {value:.2,label:labelRight},
                                     {value:.18,label:labelRight},
                                     {value:.14,label:labelRight},
                                     {value:.12,label:labelRight},
                                     {value:.07,label:labelRight},
                                     {value:.06,label:labelRight},
                                     {value:.05,label:labelRight},
                                     {value:.04,label:labelRight},
                                     {value:.03,label:labelRight},
                                     {value:.03,label:labelRight},
                                     {value:.03,label:labelRight},
                                     {value:.005,label:labelRight},
                                     {value:0,label:labelRight},
                                     {value:0,label:labelRight},
                                     -.01,-.02,-.04,-.05,-.06,-.07,-.08,-.085,-.085,-.09,-.1,-.12,-.13,
                                     -.14
                                 ]
                             }
                         ]
                     };
            }
        },
        mounted() {
          //  http.get('/smartinfo/list', {smartType: 3})
        }
    }
</script>

