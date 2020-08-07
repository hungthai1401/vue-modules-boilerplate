import { Vue as _Vue } from 'vue/types/vue';
import { VueModule } from 'vue-modules';
import { Store } from 'vuex';
import App from './components/App.vue';
import Router from 'vue-router';
import { router } from './router';
import { store } from './store';

export class Module implements VueModule {
  public readonly name = 'core';
  public router?: Router;
  public store?: Store<any>;
  public install(Vue: typeof _Vue) {
    this.router = router;
    this.store = store;
    new Vue({
      router: this.router,
      store: this.store,
      render: (h) => h(App),
    }).$mount('#app');
  }
}
