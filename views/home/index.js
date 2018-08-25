import '../../less/base.less';
import 'flex.css';
import Vue from 'vue';
import Container from '../../containers/home/Index';

document.title = '市场看法';

new Vue({
    el: '#container',
    render: h => h(Container)
});
