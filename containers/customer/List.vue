<template>
    <div class="content-warp">
        <div class="list-header" flex>
            <span flex-box="0" class="time">时间</span>
            <span flex-box="0" class="name">名称</span>
            <span flex-box="1">看法</span>

        </div>
        <div class="customer-list">
            <div class="comb-item" v-for="(item,index) in list"
                 @click.stop="showDetail(item)"
                 flex
                 :key="index">
                <span flex-box="0" class="time">{{item.time}}</span>
                <span flex-box="0" class="name">{{item.name}}</span>

                <div flex-box="1" class="operate">
                    {{truncation(item.view)}}
                </div>
            </div>
        </div>
        <modal v-show="modalOpt.show" :opt="modalOpt"></modal>
    </div>
</template>

<script>
    import '../../less/customer/list.less';
    import Modal from '../../components/Modal';

    export default {
        name: 'List',
        data() {
            return {
                list: [{
                    time: '2018.3.4',
                    name: '投顾看法A',
                    view: '梵蒂冈还是规范但是官方，i第三国际第三国际苦上加苦放大尚方宝剑吧不减肥的接口, i第三国际第三国际苦上加苦放大尚方宝剑吧不减肥的接口'
                }, {
                    time: '2018.5.4',
                    name: '投顾看法B',
                    view: '就撒返回放大是公开的好时光还是规范但是官方,i第三国际第三国际苦上加苦放大尚方宝剑吧不减肥的接口， i第三国际第三国际苦上加苦放大尚方宝剑吧不减肥的接口'
                }],
                modalOpt: {
                    show: false,
                    title: '',
                    content: '',
                    callback: () => {
                        this.modalOpt.show = false
                    }
                }
            };
        },
        props: [],
        components: {Modal},
        computed: {},
        created() {
        },
        methods: {
            showDetail(item) {
                console.log(item);
                this.modalOpt.title = item.name;
                this.modalOpt.content = item.view;
                this.modalOpt.show = true;
            },
            truncation(str) {
                if (!str) {
                    return '';
                }
                if (str.length > 20) {
                    return str.substr(0, 20) + '...';
                }
                return str;
            }
        },
        mounted() {
        }
    }
</script>
