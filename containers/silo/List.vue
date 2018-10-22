<template>
    <div class="content-warp">
        <div class="list-header" flex>
            <span flex-box="0" class="time">创建时间</span>
            <span flex-box="0" class="name">策略名称</span>
            <span flex-box="1">操作内容</span>

        </div>
        <div class="customer-list">
            <div class="comb-item" v-for="(item,index) in list"
                 @click.stop="showDetail(item)"
                 flex
                 :key="index">
                <span flex-box="0" class="time">{{dateFormat(item.createTime,'yyyy.M.d')}}</span>
                <span flex-box="0" class="name">{{item.strategyName}}</span>

                <div flex-box="1" class="operate">
                    {{truncation(item.strategyChangeContent)}}
                </div>
            </div>
        </div>
        <modal v-show="modalOpt.show" :opt="modalOpt"></modal>
    </div>
</template>

<script>
    import 'less/customer/list.less';
import Modal from 'components/Modal';
import http from 'utils/http';
import dateFormat from 'utils/date-format';
export default {
    name: 'list',
    data() {
        return {
            list: [],
            modalOpt: {
                show: false,
                title: '',
                content: '',
                callback: () => {
                    this.modalOpt.show = false;
                }
            }
        };
    },
    props: [],
    components: { Modal },
    computed: {},
    created() {},
    methods: {
        dateFormat(time, format) {
            if (typeof time !== 'number') {
                return time;
            }
            let date = new Date(time);
            return dateFormat.format(date, format);
        },
        async getList() {
            let res = await http.get('/investment/transfer/list', { userUuid: '0000' });
            if (res.code === 200) {
                this.list = res.data;
            }
        },
        showDetail(item) {
            console.log(item);
            this.modalOpt.title = item.strategyName;
            this.modalOpt.content = item.strategyChangeContent;
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
        this.getList();
    }
};
</script>
