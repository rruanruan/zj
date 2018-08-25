<template>
    <div class="footer-tabs" flex="box:mean">
        <div class="tabs-item tab-index"
             @click.stop="replaceLink('index')"
             :class="{'tab-active':type==='index'}">
            市场看法
        </div>
        <div class="tabs-item tab-financial"
             @click.stop="replaceLink('intelligence')"
             :class="{'tab-active':type==='intelligence'}">
            智能策略
        </div>
        <div class="tabs-item tab-mine"
             @click.stop="replaceLink('combination')"
             :class="{'tab-active':type==='combination'}">
            我的组合
        </div>

    </div>
</template>

<script>
    export default {
        name: "tabs",
        props: {
            type: String
        },
        methods: {
            replaceLink(link) {
                if (this.type === link) {
                    return false;
                }
                return window.location.replace(`${link}.html`);
            }
        }
    }
</script>

<style lang="less" scoped>
    .footer-tabs {
        position: absolute;
        height: 50px;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #4E4E4E;
        box-shadow: inset 0 2px 1px 0 rgba(0, 0, 0, .2);
        text-align: center;
        padding: 4px 0;
        .tabs-item {
            color: #ccc;
            font-size: .6rem;
            padding-top: 24px;
            background-size: 22px 24px;
            background-repeat: no-repeat;
            background-position: center top;
            &.tab-active {
                color: #FFD77E;
                &.tab-index {
                    background-image: url("../../images/wm/wm-index-active.png");
                }
                &.tab-financial {
                    background-image: url("../../images/wm/wm-financial-active.png");
                }
                &.tab-relation {
                    background-image: url("../../images/wm/wm-relation-active.png");
                }
                &.tab-mine {
                    background-image: url("../../images/wm/wm-mine-active.png");
                }
            }
            &.tab-index {
                background-image: url("../../images/wm/wm-index.png");
            }
            &.tab-financial {
                background-image: url("../../images/wm/wm-financial.png");
            }
            &.tab-relation {
                background-image: url("../../images/wm/wm-relation.png");
            }
            &.tab-mine {
                background-image: url("../../images/wm/wm-mine.png");
            }
        }
    }
</style>
