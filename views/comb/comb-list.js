import '../../less/base.less';
import 'flex.css';
import Vue from 'vue';
import Container from '../../containers/comb/CombList';

document.title = '持有组合';

new Vue({
    el: '#container',
    render: h => h(Container)
});
