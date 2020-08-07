import { ActionTree } from 'vuex';
import { State } from './state';
import { INCREASE_COUNTER, DECREASE_COUNTER } from './mutation-types';

export const actions: ActionTree<any, State> = {
  [INCREASE_COUNTER]({ commit }) {
    commit(INCREASE_COUNTER);
  },
  [DECREASE_COUNTER]({ commit }) {
    commit(DECREASE_COUNTER);
  },
};
