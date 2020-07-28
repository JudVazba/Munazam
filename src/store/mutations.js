export const MUTATION_TYPES = {
    SET_ITEMS: 'SET_ITEMS',
    POST_ITEM: 'POST_ITEM'
}

export const mutations = {
    [MUTATION_TYPES.SET_ITEMS](state, items){
        state.items = items;
    },
    [MUTATION_TYPES.POST_ITEM](state, item){
        state.items.push(item);
    }
};