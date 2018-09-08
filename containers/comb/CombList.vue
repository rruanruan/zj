<template>
    <div class="content-warp">
        <div class="comb-header" flex>
            <span flex-box="1">添加时间</span>
            <span flex-box="0" class="name">策略名称</span>
            <span flex-box="0" class="rate">年化</span>
            <span flex-box="0" class="max-return">回撤</span>
            <span flex-box="0" class="operate">操作</span>
        </div>
        <div class="comb-list">
            <div class="comb-item" v-for="(item,index) in list"
                 @click.stop="linkDetail(item)"
                 flex
                  :key="index">
                <span flex-box="1">{{item.time}}</span>
                <span flex-box="0" class="name">{{index%2===1?'趋势策略':'AI策略'}}</span>
                <span flex-box="0" class="rate">{{item.rate}}%</span>
                <span flex-box="0" class="max-return">{{item.maxReturn}}%</span>

                <div flex="box:mean" flex-box="0" class="operate">
                    <button class="btn-default btn-adjust" @click.stop="adjust(index)">调仓</button>
                    <button class="btn-default btn-delete" @click.stop="removeItem(index)">删除</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import '../../less/comb/comb-list.less';
    import {MessageBox, Toast} from 'mint-ui';

    export default {
        name: 'CombList',
        data() {
            return {
                list: [{
                    time: '2018.7.12',
                    rate: '8',
                    maxReturn: '9'
                }, {
                    time: '2018.7.13',
                    rate: '9',
                    maxReturn: '7'
                }, {
                    time: '2018.7.13',
                    rate: '9',
                    maxReturn: '7'
                }, {
                    time: '2018.7.13',
                    rate: '9',
                    maxReturn: '7'
                }, {
                    time: '2018.7.13',
                    rate: '9',
                    maxReturn: '7'
                }, {
                    time: '2018.7.13',
                    rate: '9',
                    maxReturn: '7'
                }, {
                    time: '2018.7.13',
                    rate: '9',
                    maxReturn: '7'
                }, {
                    time: '2018.7.13',
                    rate: '9',
                    maxReturn: '7'
                }, {
                    time: '2018.7.13',
                    rate: '9',
                    maxReturn: '7'
                }, {
                    time: '2018.7.14',
                    rate: '10',
                    maxReturn: '9'
                }, {
                    time: '2018.7.14',
                    rate: '10',
                    maxReturn: '9'
                }, {
                    time: '2018.7.14',
                    rate: '10',
                    maxReturn: '9'
                }, {
                    time: '2018.7.14',
                    rate: '10',
                    maxReturn: '9'
                }, {
                    time: '2018.7.14',
                    rate: '10',
                    maxReturn: '9'
                }, {
                    time: '2018.7.14',
                    rate: '10',
                    maxReturn: '9'
                }, {
                    time: '2018.7.14',
                    rate: '10',
                    maxReturn: '9'
                }, {
                    time: '2018.7.14',
                    rate: '10',
                    maxReturn: '9'
                }, {
                    time: '2018.7.14',
                    rate: '10',
                    maxReturn: '9'
                }, {
                    time: '2018.7.14',
                    rate: '10',
                    maxReturn: '9'
                }, {
                    time: '2018.7.14',
                    rate: '10',
                    maxReturn: '9'
                }, {
                    time: '2018.7.14',
                    rate: '10',
                    maxReturn: '9'
                }]
            };
        },
        props: [],
        components: {},
        computed: {},
        created() {
        },
        methods: {
            removeItem(index) {
                return MessageBox({
                    title: '提示',
                    message: '确定删除该组合?',
                    confirmButtonText: '删除',
                    showCancelButton: true
                }).then(action => {
                    console.log(action);
                    if (action === 'confirm') {
                        this.list.splice(index, 1);
                        Toast('删除成功');
                    }
                });
            },
            adjust() {
                Toast('调仓成功');
            },
            linkDetail(item) {
                console.log(item);
                window.location.href = './comb-detail.html';
            }
        },
        mounted() {
        }
    }
</script>
