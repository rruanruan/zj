import '../../less/base.less';
import '../../node_modules/flex.css/dist/flex.css';
import Vue from 'vue';
import Assessment from '../../containers/intro/Assessment';

document.title = '测评';

new Vue({
    el: '#container',
    render: h => h(Assessment)
});
