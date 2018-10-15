import 'less/base.less';
import 'flex.css';
import Vue from 'vue';
import Container from 'containers/silo/List';

document.title = '调仓列表';

new Vue({
    el: '#container',
    render: h => h(Container)
});
