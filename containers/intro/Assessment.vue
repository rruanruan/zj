<template>
    <div class="assessment">
        <div class="content">
            <div class="choosen-txt">
                {{choosenArr.join('')}}
            </div>
            <div class="qu-title">{{question}}</div>
            <ul>
                <li class="qu-item" :class="{'active':index==currentIndex}"
                    @click.stop="selectItem(item,index)"
                    v-for="(item,index) in answers" :key="index">
                    {{item.title}}
                </li>
            </ul>

            <div class="last-item" v-if="quIndex" @click.stop="getLast()">重新选择</div>
        </div>
        <div class="submit" v-if="showSubmit">
            <button class="btn-primary btn-submit"
                    @click.stop="updateUserInfo"
            >提交
            </button>
        </div>
    </div>
</template>
<script>

    import questions from '../../tools/questions';
    import {Toast} from 'mint-ui';
    import '../../less/intro/assessment.less';

    let timer = null;
    let quLen = questions.length;
    export default {
        name: 'assessment',
        data() {
            return {
                question: '',
                quIndex: 0,
                quLen: questions.length,
                currentIndex: 99,
                isApp: false,
                answers: [],
                options: [],
                quesNum: [],
                showSubmit: false,
                choosenArr:[],
                prefixTitle:''
            }
        },
        created() {
            this.setIndex(0);
        },
        computed: {},
        methods: {
            setIndex() {
                console.log(this.options);
                let qu = questions[this.quIndex];
                this.question = qu.question;
                this.answers = qu.answers;
                if(qu.showTitle){
                    this.prefixTitle = qu.question+':' ;
                    if(this.quIndex!==0){
                        this.prefixTitle='/'+this.prefixTitle;
                    }
                }else{
                    this.prefixTitle ='、'
                }
            },
            getLast() {
                if (this.showSubmit) {
                    this.showSubmit = false;
                    this.options.pop();
                    this.choosenArr.pop();
                }

                this.quIndex = this.quesNum.pop();
                this.setIndex();

                this.options.pop();
                this.choosenArr.pop();
                this.currentIndex = 99;
            },
            selectItem(item, index) {
                this.showSubmit = !(item.next);
                if (this.currentIndex !== 99 && !item.next) {
                    this.options.pop();
                    this.choosenArr.pop();
                    this.options.push(item.order);
                    this.choosenArr.push(this.prefixTitle+item.title);
                    console.log(this.choosenArr);
                    console.log(this.options, 'options--change');
                    this.currentIndex = index;
                    return false;
                }
                this.currentIndex = index;

                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(() => {
                    this.options.push(item.order);
                    this.choosenArr.push(this.prefixTitle+item.title);
                    console.log(this.choosenArr);
                    if (!item.next) {
                        console.log(this.arrayCal(this.options), 'options');
                        return false;
                    }
                    this.currentIndex = 99;
                    this.quesNum.push(this.quIndex);
                    this.quIndex = item.next;
                    this.setIndex();


                }, 500)
            },
            updateUserInfo() {

            },
            arrayCal(arr) {
                let result = [];
                arr.map(item => {
                    if (item !== undefined) {
                        result.push(item);
                    }
                })
                return result;
            }

        },
        mounted() {
        },
        destroyed() {

        }
    }
</script>
