import { MUTATION_TYPES } from "./Mutations.js";
export const ACTION_TYPES = {
  GET_ITEMS: "GET_ITEMS",
  ADD_ITEM: "ADD_ITEM"
};

export const actions = {
  async [ACTION_TYPES.GET_ITEMS](context, http) {
    if(context.state.items.length){
      return;
    }
    const { data } = await http.getAll();
    context.commit(MUTATION_TYPES.SET_ITEMS, data);
  },
  async [ACTION_TYPES.ADD_ITEM](context, {http, model}){
    const {data} = await http.post(model);
    context.commit(MUTATION_TYPES.ADD_ITEM, data);
  }
};