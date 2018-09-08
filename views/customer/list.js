import '../../less/base.less';
import 'flex.css';
import Vue from 'vue';
import Container from '../../containers/customer/List';

document.title = '投顾管理';

new Vue({
    el: '#container',
    render: h => h(Container)
});
