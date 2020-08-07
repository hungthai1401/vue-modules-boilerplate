import { MutationTree } from 'vuex';
import { State } from './state';
import { INCREASE_COUNTER, DECREASE_COUNTER } from './mutation-types';

export const mutations: MutationTree<State> = {
  [INCREASE_COUNTER](state: State) {
    ++state.counter;
  },
  [DECREASE_COUNTER](state: State) {
    --state.counter;
  },
};
