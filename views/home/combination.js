import '../../less/base.less';
import 'flex.css';
import Vue from 'vue';
import Container from '../../containers/home/Combination.vue';

document.title = '我的组合';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
console.log(process.env);
Vue.config.errorHandler = function VueErrorHandler(error) {
    let metaData = {
        phone: function() {
            return Math.random()
                .toString()
                .substr(2, 11);
        },
        uid: 'hello'
    };

    Raven.captureException(error, {
        extra: metaData
    });
};

Raven.config('http://1c83977e7d9c4d45b0a6aca6bce0be49@192.168.0.105:9000/2', {
    release: process.env.RELEASE_VERSION
});
Vue.config.errorHandler = function VueErrorHandler(error, vm, info) {
    let metaData = {
        phone: function() {
            return Math.random()
                .toString()
                .substr(2, 11);
        },
        uid: 'hello'
    };

    // vm and lifecycleHook are not always available
    if (Object.prototype.toString.call(vm) === '[object Object]') {
        metaData.componentName = formatComponentName(vm);
        metaData.propsData = vm.$options.propsData;
    }

    if (typeof info !== 'undefined') {
        metaData.lifecycleHook = info;
    }

    Raven.captureException(error, {
        extra: metaData
    });
};
function formatComponentName(vm) {
    if (vm.$root === vm) {
        return 'root instance';
    }
    let name = vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;
    return (
        (name ? 'component <' + name + '>' : 'anonymous component') + (vm._isVue && vm.$options.__file ? ' at ' + vm.$options.__file : '')
    );
}
new Vue({
    el: '#container',
    render: h => h(Container)
});
throw new Error('sentry error');
