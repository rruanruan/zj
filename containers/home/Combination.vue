<template>
    <div class="content-warp">
        <div class="combination">
            <div class="content-body header" flex @click.stop="createSentryError">
                <img flex-box="0" class="head-icon"
                     src="../../images/logo.png" alt="">

                <div flex-box="1" flex="cross:center">
                    <div>
                        <p class="head-name">王先生</p>
                        <p class="head-info">资深投资者</p>
                    </div>

                </div>

            </div>
            <div class="content-body hint" v-if="false">
                <!--<div flex>
                    <p flex-box="1" flex="cross:center">
                        您还未购买组合，赶紧前去只能组合页面购买吧
                    </p>
                    <div class="arrow-right" flex-box="0" flex="cross:center">
                        <img src="../../images/arrow-right.png" alt="">
                    </div>

                </div>-->

                <div class="box-group" flex="box:mean">
                    <div class="box-action" flex="main:center">追加购买</div>
                    <div class="box-action" flex="main:center">调仓</div>
                    <div class="box-action" flex="main:center">赎回</div>
                </div>

            </div>

            <div class="content-body items">
                <div class="item" flex @click.stop="linkTo('../comb/comb-list.html')">
                    <div flex-box="1" flex="cross:center">
                        <div class="item-icon">
                            <img src="../../images/combination/cyjj.png"/>
                        </div>
                        <span>持有组合</span>
                    </div>
                    <div class="arrow-right" flex-box="0" flex="cross:center">
                        <img src="../../images/arrow-right.png" alt="">
                    </div>
                </div>
                <!--  <div class="item" flex>
                      <div flex-box="1" flex="cross:center">
                          <div class="item-icon">
                              <img src="../../images/combination/jyjl.png"/>
                          </div>
                          <span>交易记录</span>
                      </div>

                      <div class="arrow-right" flex-box="0" flex="cross:center">
                          <img src="../../images/arrow-right.png" alt="">
                      </div>
                  </div>-->
                <div class="item" flex>
                    <div flex-box="1" flex="cross:center">
                        <div class="item-icon">
                            <img src="../../images/combination/dcxx.png"/>
                        </div>
                        <span>调仓信息</span>
                    </div>
                    <div class="arrow-right" flex-box="0" flex="cross:center">
                        <img src="../../images/arrow-right.png" alt="">
                    </div>
                </div>
                <!--  <div class="item" flex>

                      <div flex-box="1" flex="cross:center">
                          <div class="item-icon">
                              <img src="../../images/combination/dtgl.png"/>
                          </div>
                          <span>定投管理</span>
                      </div>
                      <div class="arrow-right" flex-box="0" flex="cross:center">
                          <img src="../../images/arrow-right.png" alt="">
                      </div>
                  </div>-->
                <div class="item" flex @click.stop="linkTo('../customer/list.html')">

                    <div flex-box="1" flex="cross:center">
                        <div class="item-icon">
                            <img src="../../images/combination/tgkf.png"/>
                        </div>
                        <span>投顾看法</span>
                    </div>
                    <div class="arrow-right" flex-box="0" flex="cross:center">
                        <img src="../../images/arrow-right.png" alt="">
                    </div>
                </div>
            </div>

        </div>

        <tabs type="combination"></tabs>
    </div>
</template>

<script>
import '../../less/home/combination.less';
import Tabs from '../../components/Tabs';
import http from '../../utils/http';

export default {
    name: 'Combination',
    data() {
        return {};
    },
    props: [],
    components: { Tabs },
    computed: {},
    created() {},
    methods: {
        linkTo(link) {
            window.location.href = link;
        },
        createSentryError() {
            let array = [1, 2, 3];
            let three = array[3];
            console.log(three[3]);
        }
    },
    async mounted() {
        let array = [1, 2, 3];
        let data = await http.get('/smartinfo/list', { smartType: 3 });
        console.log(data[3]);

        array[3][3] = 4;
    }
};
</script>
