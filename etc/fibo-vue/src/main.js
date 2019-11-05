import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import URI from 'urijs';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: 'UA-124531442-2',
  router,
});

Vue.filter('applyTag', function (value, self) {
  if (!value || !self || !self.$route) return ''
  const query = self.$route.query;

  if (!query.tag) {
    return value
  } else {
    return URI(value).query({ tag: query.tag })
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
