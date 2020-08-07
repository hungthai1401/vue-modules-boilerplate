import { GetterTree } from 'vuex';
import { State } from './state';

export const COUNTER = 'counter';

export const getters: GetterTree<any, State> = {
  [COUNTER]: (state: State) => state.counter,
};
