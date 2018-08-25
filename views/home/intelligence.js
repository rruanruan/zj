import '../../less/base.less';
import 'flex.css';
import Vue from 'vue';
import Container from '../../containers/home/Intelligence';

document.title = '智能策略';

new Vue({
    el: '#container',
    render: h => h(Container)
});
