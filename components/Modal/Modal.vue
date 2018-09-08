<template>
    <div class="zj-modal" flex="main:center cross:center" @click.stop="opt.callback">
        <div class="modal-body">
            <div class="modal-title">{{opt.title}}</div>
            <div class="modal-content">{{opt.content}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Modal',
        data() {
            return {};
        },
        props: {
            opt: Object

        },
        components: {},
        computed: {},
        created() {
        },
        methods: {},
        mounted() {
        }
    }
</script>

<style lang="less" scoped>
    .zj-modal {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 9;
        background: rgba(0, 0, 0, .4);
        .modal-body {
            position: relative;
            width: 16rem;
            margin: auto;
            background: #fff;
            border-radius: .5rem;
            .modal-title {
                color: #333;
                font-size: .8rem;
                padding: .5rem;
                text-align: center;
                border-bottom: 1px solid #ddd;

            }
            .modal-content {
                color: #666;
                font-size: .7rem;
                padding: .5rem;
                line-height: 1rem;
            }
        }
    }
</style>
