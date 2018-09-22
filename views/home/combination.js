import '../../less/base.less';
import 'flex.css';
import Vue from 'vue';
import Container from '../../containers/home/Combination';

document.title = '我的组合';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
console.log(process.env);
Raven.config('https://07d2202d85c6481eafae15fc3f02c226@sentry.io/1283793', {
    release: process.env.RELEASE_VERSION
})
    .addPlugin(RavenVue, Vue)
    .install();


new Vue({
    el: '#container',
    render: h => h(Container)
});
