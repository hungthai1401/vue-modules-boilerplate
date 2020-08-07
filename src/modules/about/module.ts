import { Vue as _Vue } from 'vue/types/vue';
import { VueModule } from 'vue-modules';
import VueRouter from 'vue-router';
import { routes } from './router';
import { Store } from 'vuex';
import { moduleStore } from './store';

export class Module implements VueModule {
  public readonly name = 'about';
  constructor(private router: VueRouter, private store: Store<any>) { }

  public install(Vue: typeof _Vue) {
    this.router.addRoutes(routes);
    this.store.registerModule([this.name], moduleStore);
  }
}