import {MUTATION_TYPES} from './mutations';
export const ACTION_TYPES = {
    GET_ITEMS: 'GET_ITEMS',
    POST_ITEM: 'POST_ITEM'
};

export const actions = {
    async [ACTION_TYPES.GET_ITEMS](context, http){
        const {data} = await http.getAll();
        context.commit(MUTATION_TYPES.SET_ITEMS, data);
    },

    async [ACTION_TYPES.POST_ITEMS](context, http, model){
        const {data} = await http.post(model);
        context.commit(MUTATION_TYPES.POST_ITEM, data);
    },
};