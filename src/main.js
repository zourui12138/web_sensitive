// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

//引入jQuery
import $ from 'jquery'

//引入element-ui
import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'
import './element-variables.scss'
Vue.use(ElementUI);

Vue.directive('scroll', {
    // 当组件完成一次更新时调用 还有其它的钩子函数 自行选择合适的
    componentUpdated:  (el) => {el.scrollTop = 0;}
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
