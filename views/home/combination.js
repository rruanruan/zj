import '../../less/base.less';
import 'flex.css';
import Vue from 'vue';
import Container from '../../containers/home/Combination';

document.title = '我的组合';

new Vue({
    el: '#container',
    render: h => h(Container)
});
