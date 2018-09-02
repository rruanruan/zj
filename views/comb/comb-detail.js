import '../../less/base.less';
import 'flex.css';
import Vue from 'vue';
import Container from '../../containers/comb/CombDetail';

document.title = '组合详情';

new Vue({
    el: '#container',
    render: h => h(Container)
});
