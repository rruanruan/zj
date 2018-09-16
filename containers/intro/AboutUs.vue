<template>
    <div class="about-us" flex="dir:top">
        <div class="tab" flex="box:mean" flex-box="0">
            <div :class="{'active':now==0}" @click="tabHandle(0)">省级平台</div>
            <div :class="{'active':now==1}" @click="tabHandle(1)">百亿资本</div>
            <div :class="{'active':now==2}" @click="tabHandle(2)">一带一路</div>
            <div :class="{'active':now==3}" @click="tabHandle(3)">安全保障</div>
        </div>

        <div flex-box="1" style="overflow-y: auto">
            <div class="banner">
                <img src="../../images/about-us/pic0.jpg" alt="banner" v-if="now==0">
                <img src="../../images/about-us/pic1.png" alt="banner" v-if="now==1">
                <img src="../../images/about-us/pic2.png" alt="banner" v-if="now==2">
                <img src="../../images/about-us/pic3.jpg" alt="banner" v-if="now==3">
            </div>
            <div class="section seperate" v-if="list[now].length">
                <div flex v-for="(item,index) in list[now]" :key="index">
                    <div class="col" flex-box="0">
                        <div class="line" >
                            <div class="circle" ></div>
                        </div>
                    </div>
                    <p flex-box="1">{{item}}</p>
                </div>
            </div>
            <div class="tab-content" v-if="now==0">
                <div class="section seperate sides" flex-box="0" >
                    <div class="title" flex="main:center">
                        中冀投资董事会&监事会
                    </div>
                    <div class="content-list" flex>
                        <img src="../../images/about-us/gengjm.jpg" alt="gengjm" flex-box="0">
                        <div class="list-detail"  flex-box="1">
                            <p class="detail-title">耿建明<span>董事长</span></p>
                            <p class="detail-content">武汉理工大学产业经济学本科毕业，新加坡南洋理工大学MBA，博士学位，高级工程师。<br/>
                                现任荣盛控股股份有限公司总裁、荣盛房地产发展股份有限公司董事长。</p>
                        </div>
                    </div>
                    <div class="content-list" flex>
                        <img src="../../images/about-us/fengqy.jpg" alt="fengqy" flex-box="0">
                        <div class="list-detail"  flex-box="1">
                            <p class="detail-title">冯全玉<span>董事</span></p>
                            <p class="detail-content">长江商学院EMBA毕业，硕士学历。<br/>
                                曾任荣盛发展集团股份有限公司董事、副总经理，兼任济南铭翰房地产开发有限公司、山东荣盛富翔地产开发有限公司法定代表人。</p>
                        </div>
                    </div>
                    <div class="content-list" flex>
                        <img src="../../images/about-us/yaokz.jpg" alt="yaokz" flex-box="0">
                        <div class="list-detail"  flex-box="1">
                            <p class="detail-title">姚奎章<span>董事</span></p>
                            <p class="detail-content">现任河北养元智汇饮品股份有限公司董事长、法定代表人，兼任河北食品工业协会会长、衡水市食品工业协会副会长、衡水市企业家协会副会长。</p>
                        </div>
                    </div>
                    <div class="content-list" flex>
                        <img src="../../images/about-us/wangys.jpg" alt="wangys" flex-box="0">
                        <div class="list-detail"  flex-box="1">
                            <p class="detail-title">王玉锁<span>董事</span></p>
                            <p class="detail-content">天津财经学院管理系企业管理专业毕业，硕士学历。<br/>
                                现任新奥集团股份有限公司董事局主席，兼任第十一届中国人民政治协商会议全国委员会常委。</p>
                        </div>
                    </div>
                </div>
                <div class="section sides" flex-box="0" >
                    <div class="title" flex="main:center">
                        董事会其他成员
                    </div>
                    <div class="content">
                        <div flex="box:mean">
                            <p><span class="name">贾锋</span><span class="position">董事</span></p>
                            <p><span class="name">刁金旺</span><span class="position">董事</span></p>
                            <p><span class="name">梁丽勤</span><span class="position">董事</span></p>
                        </div>
                        <div flex="box:mean">
                            <p><span class="name">梁磊</span><span class="position">董事</span></p>
                            <p><span class="name">唐炫</span><span class="position">独立董事</span></p>
                            <p><span class="name">吕红兵</span><span class="position">独立董事</span></p>
                        </div>
                        <div flex="box:mean">
                            <p><span class="name">周春生</span><span class="position">独立董事</span></p>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="section sides">
                    <div class="title" flex="main:center">
                        监事会成员
                    </div>
                    <div flex class="member">
                        <p flex-box="1">刘书英</p>
                        <p flex-box="1">高余</p>
                        <p flex-box="1">吴显光</p>
                    </div>
                </div>
            </div>
            <div class="tab-content" v-if="now==1">
                <div class="section seperate sides">
                    <div class="title font-14">主要股东包括：</div>
                    <ul class="company-list">
                        <li v-for="(item,index) in companyList" :key="index">
                            <p class="subtitle">{{item.subtitle}}</p>
                            <p class="company" v-for="(info,index) in item.company" :key="index">{{info}}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="tab-content" v-if="now==2">
                <div class="section seperate sides">
                    <div class="thr-title">
                        五大主要投资领域
                    </div>
                    <div class="territory-list">
                        <div flex="box:mean" class="item">
                            <div>
                                <img src="../../images/about-us/icon1.png" alt="base">
                                <p>基础设施</p>
                            </div>
                            <div>
                                <img src="../../images/about-us/icon2.png" alt="base">
                                <p>产业升级</p>
                            </div>
                            <div>
                                <img src="../../images/about-us/icon3.png" alt="base">
                                <p>国企混改</p>
                            </div>
                        </div>
                        <div flex="box:mean" class="item">
                            <div>
                                <img src="../../images/about-us/icon4.png" alt="base">
                                <p>一带一路</p>
                            </div>
                            <div>
                                <img src="../../images/about-us/icon5.png" alt="base">
                                <p>创业创新</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section seperate sides">
                    <p class="territory-content">
                        根据国家发展的宏伟蓝图，中冀投资紧随供给侧改革、“大众创业，万众创新”的时代浪潮，充分分析外部机遇和风险，结合公司自身优势和劣势，把握未来经济发展态势，实施以大资产和大财富为两端，将公司打造成具有全部金融牌照、产融一体的国际一流投资集团。
                    </p>
                </div>
            </div>
            <div class="tab-content" v-if="now==3">
                <div class="content-no">
                    <div flex="dir:top cross:center">
                        <div class="security-item">信息透明</div>
                    </div>
                    <div flex="box:mean">
                        <div flex="dir:top cross:center">
                            <div class="security-item">信誉支撑</div>
                            <div class="security-item">风控严格</div>
                            <div class="security-item">合规服务</div>
                        </div>
                        <div class="middle">
                            <div class="center-circle-outer">
                                <div class="center-circle-middle">
                                    <div class="center-circle-inner">
                                        <img src="../../images/about-us/shield.png" alt="shield">
                                        <div class="circle-text">多重<br/>安全保障</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div flex="dir:top cross:center">
                            <div class="security-item">技术加密</div>
                            <div class="security-item">匹配适当</div>
                            <div class="security-item">资金监管</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import '../../less/intro/about-us.less';
  /*  import $device from '../tools/device';
    import wx from '../tools/wx';*/
    export default {
        name: 'about-us',
        data(){
            return {
                list:[
                    [
                        '河北省政府支持',
                        '河北省工商联牵头搭建',
                        '河北省九家著名民营企业联合创立'
                        /*,
                         '金疙瘩母公司中冀投资是在河北省政府支持下由河北省工商联牵头搭建、河北省九家著名民营企业联合创立的一家大型投资集团。'*/
                    ],
                    [
                        '9大股东共同出资',
                        '实力不容小觑',
                        '注册资本100亿元'
                    ],
                    [

                    ],
                    [
                        '专业法律顾问合规指导',
                        '全方位智能风控体系',
                        '顶尖技术团队多重加密技术'
                    ]
                ],
                now:0,
                companyList:[
                    {
                        'subtitle':'荣盛房地产发展股份有限公司',
                        'company':[
                            '全国百强地产企业，2016年行业综合排名第17位',
                            '河北省首家通过A股IPO上市的房地产企业，证券代码为SZ002146',
                            '截止2015年12月31日，公司总资产为1028亿元'
                        ]
                    },
                    {
                        'subtitle':'河北养元智汇饮品股份有限公司',
                        'company':[
                            '中国最大的核桃饮品生产基地',
                            '中国核桃乳饮料行业标准起草单位，行业的先行者',
                            '“六个核桃”品牌缔造者'
                        ]
                    },
                    {
                        'subtitle':'新奥资本管理有限公司',
                        'company':[
                            '以资产管理和保险为主导、全价值链的领先金融服务集团'
                        ]
                    },
                    {
                        'subtitle':'蓝池集团有限公司',
                        'company':[
                            '国家一类汽车维修企业资质',
                            '年销售收入近50亿元',
                            '冀南地区汽车销售服务行业的龙头企业'
                        ]
                    },
                    {
                        'subtitle':'冀春实业集团有限公司',
                        'company':[
                            '旗下有二十余家实体公司',
                            '集化工、房地产、金融、煤炭于一体的大型集团企业'
                        ]
                    },
                    {
                        'subtitle':'迁安市九江线材有限责任公司',
                        'company':[
                            '我国单体线材产量最大的企业',
                            '各项经济技术指标均达到国内同行业先进水平',
                            '线材销往全国各大市场并出口10多个国家和港台地区'
                        ]
                    },
                    {
                        'subtitle':'唐山东华投资有限公司',
                        'company':[
                            '集金融投资与金融业务咨询为一体的投资公司'
                        ]
                    },
                    {
                        'subtitle':'斯特龙投资集团有限公司',
                        'company':[
                            '以金融投资业务为核心，涉及生物制药、建设工程等多领域的投资公司'
                        ]
                    },
                    {
                        'subtitle':'北京华耐立家投资有限公司',
                        'company':[
                            '以投资管理、投资咨询、营销策划为核心业务的投资公司'
                        ]
                    },
                ]
            }
        },
        created(){
            this.now = window.location.hash.split('#')[1]||0;
          /*  if($device.isWeixin){
                this.getShare();
            }*/
        },
        computed: {
        },
        methods: {
            tabHandle(num){
                this.now=num;
            },
         /*   getShare(){
                wx.getShare({
                    title:'金疙瘩——懂你的智能化定制理财服务专家',
                    desc:'冀投资旗下智能化定制理财服务平台，省级平台，百亿资本，独家产品，定制理财。'
                });
            }*/
        },
        destroyed(){

        }
    }
</script>
