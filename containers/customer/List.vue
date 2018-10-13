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
                <span flex-box="0" class="time">{{dateFormat(item.updateTime,'yyyy.M.d')}}</span>
                <span flex-box="0" class="name">{{item.opinionName}}</span>

                <div flex-box="1" class="operate">
                    {{truncation(item.deleteFlag)}}
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
    name: 'List',
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
    created() {
        this.getList();
    },
    methods: {
        dateFormat(time, format) {
            let date = new Date(time);
            return dateFormat.format(date, format);
        },
        async getList() {
            let res = await http.get('investment/opinion/list');
            console.log(res);
            if (res.code === 200) {
                this.list = res.data;
            }
        },
        showDetail(item) {
            console.log(item);
            this.modalOpt.title = item.opinionName;
            this.modalOpt.content = item.deleteFlag;
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
    mounted() {}
};
</script>
