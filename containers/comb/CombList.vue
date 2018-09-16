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
                <span flex-box="1">{{dateFormat(item.createTime,'yyyy-MM-dd')}}</span>
                <span flex-box="0" class="name">{{getName(item.strategyType)}}</span>
                <span flex-box="0" class="rate">{{item.annualInterestRate}}%</span>
                <span flex-box="0" class="max-return">{{item.expectMaxRetreat}}%</span>

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
    import http from '../../utils/http';
    import dateFormat from '../../utils/date-format';
    import {MessageBox, Toast} from 'mint-ui';

    export default {
        name: 'CombList',
        data() {
            return {
                list: []
            };
        },
        props: [],
        components: {},
        computed: {},
        created() {
            this.getList();
        },
        methods: {
            dateFormat(time, format) {
                let date = new Date(time);
                return dateFormat.format(date, format);
            },
            getName(type) {
                if (type === 2) {
                    return '回转交易策略'
                }
                if (type === 3) {
                    return 'AI策略'
                }
                if (type === 4) {
                    return '自定义策略'
                }
                return '趋势策略';
            },
            async getList() {
                let res = await http.get('/investment/strategy/list', {userUuid: '0000'});
                if (res.code === 200) {
                    this.list = res.data;
                }

            },
            async removeItem(index) {
                let action = await MessageBox({
                    title: '提示',
                    message: '确定删除该组合?',
                    confirmButtonText: '删除',
                    showCancelButton: true
                });
                if (action === 'confirm') {
                    let res = await   this.deleteItem(index);
                    if (res.code === 200) {
                        this.list.splice(index, 1);
                    }
                }

            },
            deleteItem(index) {
                let item = this.list[index];
                let userUuid = '0000';
                let {strategyUuid} = item;
                return http.post('/investment/strategy/edit', {userUuid, strategyUuid})

            },
            adjust() {
                Toast('调仓成功');
            },
            linkDetail(item) {
                console.log(item);
                window.sessionStorage.setItem('comb-detail', JSON.stringify(item));
                window.location.href = './comb-detail.html';
            }
        },
        mounted() {
        }
    }
</script>
