import '../../less/base.less';
import 'flex.css';
import Vue from 'vue';
import Container from '../../containers/home/Combination.vue';

document.title = '我的组合';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
console.log(process.env);

Raven.config('http://1c83977e7d9c4d45b0a6aca6bce0be49@hetanhong.sentry.com/2', {
    release: process.env.RELEASE_VERSION
})
    .addPlugin(RavenVue, Vue)
    .install();

new Vue({
    el: '#container',
    render: h => h(Container)
});
throw new Error('sentry error');
