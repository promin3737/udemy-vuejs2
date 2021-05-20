const state = {
  count: 2,
};

const getters = {
  doubleCount: (state) => state.count * 2,
  ripleCount: (state) => state.count * 3,
};

const mutation = {
  increment(state, number) {
    state.count += number;
  },
  decrement(state, number) {
    state.count -= number;
  },
};

const actions = {
  increment({ commit }, number) {
    commit("increment", number);
  },
  decrement({ commit }, number) {
    commit("decrement", number);
  },
};

export default {
  state: state,
  getters,
  mutations,
  actions
}