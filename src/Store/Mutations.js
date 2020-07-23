export const MUTATION_TYPES = {
    SET_ITEMS: "SET_ITEMS",
    ADD_ITEM: "ADD_ITEM",
  };
  
  export const mutations = {
           [MUTATION_TYPES.SET_ITEMS](state, items) {
             state.items = items;
           },
           [MUTATION_TYPES.ADD_ITEM](state, item) {
             state.items.push(item);
           },
         };