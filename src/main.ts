import Vue from 'vue';
import { CoreModule } from '@/modules/core';

async function bootstrap() {
  Vue.config.productionTip = false;
  const coreModule = new CoreModule();
  coreModule.install(Vue);
  const requireModules = require.context('./modules', true, /\module.ts$/);
  requireModules.keys().forEach((module) => {
    if (module.includes('core')) {
      return;
    }
    const moduleName = module.replace(/(\.\/|\.ts)/g, '');
    import(`@/modules/${moduleName}`).then((moduleImported) => {
      const instanceModule = new moduleImported.Module(coreModule.router!, coreModule.store!);
      instanceModule.install(Vue);
    });
  });
}

bootstrap();
