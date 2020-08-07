import { Module } from 'vuex';
import { State, initialState } from './state';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

export const moduleStore: Module<any, State> = {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions,
};
