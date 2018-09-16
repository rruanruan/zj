import '../../less/base.less';
import '../../node_modules/flex.css/dist/flex.css';
import Vue from 'vue';
import AboutUs from '../../containers/intro/AboutUs';

document.title = '平台简介';

new Vue({
    el: '#container',
    render: h => h(AboutUs)
});
