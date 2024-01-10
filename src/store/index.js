import { createStore } from "vuex";

export default createStore({
      state: {
        balance: [],
        num: 20,
      },
      getters: {
        getNum(state) {
          return state.num;
        },
        getBalance(state) {
          return state.balance;
        }
      },
      mutations: {
        plusNum(state, payload) {
          state.num = state.num + payload;
        },
      addBalance(state,payload) {
          state.balance.push({
          type: payload.balanceType,
          quantity: payload.balanceQuantity,
          for_date: payload.balanceDate,
          comment: payload.balanceComment
        })
      }
      }
})