<template>
    <div class="kingold-picker">
        <div class="shadow-warp"></div>
            <div class="picker-warp" :class="{'enter':visible}">
                <div class="picker-header" flex="main:justify">
                    <span flex="0" @click.stop="cancel">取消</span>
                    <span flex="1" class="ellipsis">{{title}}</span>
                    <span flex="0" class="positive" @click.stop="ensure">确定</span>
                </div>
                <mt-picker :slots="array"
                           @change="onValuesChange" valueKey="name"></mt-picker>
            </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {Picker} from 'mint-ui';
    Vue.component(Picker.name, Picker);
    import './kingold-picker.less';
    export default {
        name: 'kingold-picker',
        props: ['title', 'list', 'default-index', 'multipick','slots'],
        data(){
            return {
                result: {},
                visible: false
            }
        },
        created(){
           setTimeout(()=>{
               this.visible = true;
           },20)
        },
        computed: {
            array(){
                if(this.multipick){
                    return this.slots
                }
                return [{
                    textAlign: 'center',
                    values: this.list,
                    defaultIndex: this.defaultIndex
                }]
            }
        },
        methods: {
            onValuesChange(picker, values){
                this.result = values[0];
                if(this.multipick){
                    this.result = values;
                }
                setTimeout(() => {
                    this.$emit('onValuesChange', picker, values);
                }, 500)
            },
            cancel(){
                this.visible = false;
                setTimeout(() => {
                    this.$emit('back', 0)
                }, 500);

            },
            ensure(){
                this.visible = false;
                setTimeout(() => {
                    this.$emit('back', this.result);
                }, 500)
            }
        },
        destroyed(){

        }
    }
</script>
